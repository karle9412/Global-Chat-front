import axios from "axios";
import { useEffect, useState } from "react";
import "./friendsCSS/FriendsList.css";

const RequireFriendsList = (props) => {
  const { requsername, requireemail } = props;
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
      .put(`/friendlist/consent`, {
        params: { oppemail: requireemail },
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

        <div className="btn_tab">
          {isUnfollowClicked === false ? (
            <button className="followBtn" onClick={follow}>
              팔로우
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RequireFriendsList;
