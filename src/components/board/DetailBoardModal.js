import axios from "axios";
import { useState, useEffect } from "react";
import "./boardCSS/Modal.css";
import UpdateModal from "../board/UpdateModal";
import { authheader } from "../../service/ApiService";

const DetailBoardModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, boardContent, bno, email } = props;
  // const [bno, setBno] = useState(props.bno);
  const [isClicked, setIsClicked] = useState(false);


  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const [user_email, setUser_email] = useState("");

  useEffect(()=> {
    authheader()
    axios.get('/user/getintro',)
    .then(response => {
        setUser_email(response.data.email)
    })
    .catch(error => {
        alert("유저 정보 불러오기 실패")
        console.error(error);
    });
  }, []);


  // const handleUpdate = () => {
  //   axios
  //     .put(`/board/update/${bno}`)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // };


  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            { user_email === email ?
            <button className="update" onClick={handleClick}>
              수정
            </button> : null }
            {isClicked ? <UpdateModal open={isClicked} close={() => {setIsClicked(false)}} header="게시글 수정"
                                      boardContent={boardContent} bno={bno} email={email}/> : null}
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default DetailBoardModal;
