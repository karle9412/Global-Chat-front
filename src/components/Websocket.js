import { useState, useEffect, useRef} from 'react';
import React from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { authheader } from '../service/ApiService'
import axios from 'axios';

const Websocket = ()=> {
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState("");
  const stompClient = useRef(null);
  const [msg,Setmsg] = useState("")
   useEffect(() => {
    
    authheader()
      axios.get('/user/getintro')
      .then(response => {
        console.log(response.data.username)
        setUsername(response.data.username)
        
    })
    .catch(error => {
        alert("요기요")
        console.error(error);
    })
  }, []);
     
  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws');
    stompClient.current = Stomp.over(socket);
    stompClient.current.connect({}, (frame) => {
      setConnected(true);
      console.log('Connected: ' + frame);
      // stompClient.current.subscribe('/topic/greetings', (greeting) => {
      //   showGreeting(JSON.parse(greeting.body).content);
      // });
      stompClient.current.subscribe('/user/'+username+'/alarm', (greeting) => {
        showGreeting(greeting);
      });
    });

  }, [username]);
    // return () => {
    //   if (stompClient.current) {
    //     stompClient.current.disconnect();
    //   }
    //   setConnected(false);
    //   console.log("Disconnected");
    // }
  // }, [username]);


  const connect = () => {
    stompClient.current.connect({}, (frame) => {
      setConnected(true);
      console.log('Connected: ' + frame);
      console.log("요기요기요기",username)
      // stompClient.current.subscribe('/topic/greetings', (greeting) => {
      //   showGreeting(JSON.parse(greeting.body).content);
         
      // });
      stompClient.current.subscribe('/user/'+username+'/alarm', (greeting) => {
        showGreeting(greeting);
      });
    });
  }
  

  const disconnect = () => {
    if (stompClient.current) {
      stompClient.current.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
  }

  

  const showGreeting = (message) => {
    console.log("1111111111",message.body)
    Setmsg(message.body)
    
  }
 
  
  const sendName = () => {
    stompClient.current.send("/app/hello", {}, JSON.stringify({'name': username, 'sendto':'가냐'}));
  }
  

return (
        <div>
            {msg}
            <div>
                
                <button id="send" onClick={sendName}>Send</button>
            </div>
        </div>
);

};

export default Websocket;





// export const sendName = () => {
//   stompClient.current.send("/app/hello", {}, JSON.stringify({'name': username, 'sendto':'가냐'}));
// }


