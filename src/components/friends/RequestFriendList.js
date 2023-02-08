import axios from "axios";
import { useEffect, useState } from "react";
import "./friendsCSS/FriendsList.css";

const RequestFriendsList = (props) => {
  const { requsername, requireemail, isRequest } = props;
  const [isUnfollowClicked, setIsUnfollowClicked] = useState(false);
  const [isBlockClicked, setIsBlockClicked] = useState(false);
  

  const block = () => {
    axios
      .put(`/friendlist/block`, {
        params: { requireemail: requireemail },
      })
      .then((res) => {
        setIsBlockClicked(true);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const unfollowAndBlockCancel = () => {
    axios
      .delete(`/friendlist/block`, {
        params: { oppemail: requireemail },
      })
      .then((res) => {
        setIsUnfollowClicked(true);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(requireemail);
        console.log(error);
      });
  };

  const follow = () => {
    axios
      .post(`/friendlist/request`, {
        requireemail: requireemail,
        requsername: requsername,
      })
      .then((res) => {
        setIsUnfollowClicked(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      <div></div>

      <div className="friendsContent-tab">
        <div className="username">{requsername}</div>
        <div className="state"> {isRequest ? " • 팔로우 요청중..." : null} </div>
        <div className="btn_tab">
        
        {  isUnfollowClicked ? (
            <button className="followBtn" onClick={follow}>
              팔로우
            </button>
          ) : (
            <button
              className="followingCancelBtn"
              onClick={unfollowAndBlockCancel}
            >
              언팔로우
            </button>
          )}
          {isBlockClicked ? (
            <button className="blockCancelBtn" onClick={unfollowAndBlockCancel}>
              차단해제
            </button>
          ) : (
            <button className="blockBtn" onClick={block}>
              차단
            </button>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default RequestFriendsList;