import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import Layout from './Layout';
import axios from 'axios';
import UserImg from './Reply/UserImg';
import './ChatRoom.css'
import { authheader } from '../service/ApiService';

var stompClient = null;
const ChatRoomTest = () => {
  const [privateChats, setPrivateChats] = useState(new Map());
  const [userList, setUserList] = useState([]);
  const [userData, setUserData] = useState({
    username: '',
    receivername: '',
    connected: false,
    message: ''
  });
  const [tab, setTab] = useState('check')

  useEffect(() => {
    authheader()
    axios.get('/auth/getalluser')
      .then(res => {
        console.log(res.data)
        setUserList(res.data)
        for (let index = 0; index < res.data.length; index++) {
          privateChats.set(res.data[index].email, [])
          setPrivateChats(privateChats)
        }
      })

    axios.get('/user/getintro')
      .then(res => {
        setUserData({ ...userData, username: res.data.email })
      })
  }, [])

  const connect = () => {
    let Sock = new SockJS('http://localhost:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  }

  const onConnected = () => {
    setUserData({ ...userData, "connected": true });
    stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessage);
    userJoin();
  }

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN"
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  }

  const onPrivateMessage = (payload) => {
    var payloadData = JSON.parse(payload.body);
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      let list = [];
      list.push(payloadData);
      console.log("리스트" + list)
      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  }
  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, "message": value });
  }

  const sendPrivateValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        receiverName: tab,
        message: userData.message,
        status: "MESSAGE"
      };

      if (userData.username !== tab) {
        privateChats.get(tab).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, "message": "" });
    }
  }

  const onError = (err) => {
    console.log(err)
  }

  useEffect(() => {
    console.log(userData)
    console.log("채팅방")
    console.log(privateChats)
    console.log(tab)
  }, [userData])


  const StartChat = () => {
    connect();
  }


  return (
    <Layout>
      {userData.connected ?
        <div className='chat-box-test'>
          <div className='friend-tab'>
            {userList.length > 0 && userList.map((user) => (
              <div key={user.id} className="friend-tab-box" onClick={() => setTab(user.email)}>
                <div className="friend-tab-img-box">
                  <UserImg email={user.email} />
                </div>
                <div className="friend-tab-text">
                  <div>{user.username}</div>
                  <div>{user.intro}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="chat-content">
            <ul className="chat-messages">

              {tab !== 'check' &&
                [...privateChats.get(tab)].map((chat, index) => (
                  <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                    {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                    <div className="message-data">{chat.message}</div>
                    {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                  </li>
                ))}
            </ul>

            <div className="send-message">
              <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} />
              <button type="button" className="send-button" onClick={sendPrivateValue}>send</button>
            </div>
          </div>
        </div>
        :
        <div>
          <button type="button" onClick={StartChat}>
            채팅 시작
          </button>
        </div>}

    </Layout>
  )
}

export default ChatRoomTest