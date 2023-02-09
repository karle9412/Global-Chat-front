import axios from "axios";
import { useEffect, useState, useRef } from "react";
import "./friendsCSS/FriendsList.css";
import { WebsocketOpen } from "../../service/WebSocketTest";
import { authheader } from "../../service/ApiService";

const RequireFriendsList = (props) => {
  const { requsername, requireemail } = props;
  const [isUnfollowClicked, setIsUnfollowClicked] = useState(false);
  const stompClient = useRef(null);
  const [username, setUsername] = useState("");
  const [connected, setConnected] = useState(false);

  // 유저 정보 불러오기
  useEffect(() => {
    authheader();
    axios
      .get("/user/getintro")
      .then((response) => {
        setUsername(response.data.username);
      })
    WebsocketOpen(setConnected, stompClient, username);
  }, []);

  // 팔로우 승낙
  const follow = () => {
    axios
      .put("/friendlist/consent", {
        requireemail: requireemail,
      })
      .then((res) => {
        setIsUnfollowClicked(!isUnfollowClicked);
        console.log(res.data);
        console.log("2222", username);
        stompClient.current.send(
          "/app/hello",
          {},
          JSON.stringify({
            sendname: username,
            receivename: requireemail,
            cont: username + "님과 팔로우가 됐어요!",
          })
        );
      })
  };

  return (
    <div>
      <div></div>

      <div className="friendsContent-tab">
        <div className="username">{requsername}</div>
        <div className="btn_tab">
          {isUnfollowClicked === false ? (
            <button className="followBtn" onClick={follow}>
              팔로우 승낙
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RequireFriendsList;
