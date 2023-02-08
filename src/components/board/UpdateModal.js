import { useEffect, useState } from "react";
import axios from "axios";
import "./boardCSS/UpdateModal.css";
import { authheader } from "../../service/ApiService";

const UpdateModal = (props) => {
  const { open, close, header, bno, email } = props;

  const [boardContent, setBoardContent] = useState(props.boardContent);
  const [user_email, setUser_email] = useState("");

  const handleChange = (e) => {
    setBoardContent(e.target.value);
  };

  useEffect(()=> {
    authheader()
    axios.get('/user/getintro',)
    .then(response => {
        setUser_email(response.data.email)
        console.log(response)
    })
    .catch(error => {
        alert("유저 정보 불러오기 실패")
        console.error(error);
    });
  
  }, [])

  const handleUpdate = () => {
      axios
        .put(`/board/update/${bno}`, {
          boardContent: boardContent
        })
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        })
  };


  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <div className="modalInfo">
                <textarea className="modalContent" defaultValue={boardContent} onChange={handleChange} />
            </div>
          </main>
          <footer>
            <button className="saveBtn" onClick={handleUpdate}>
              수정
            </button>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default UpdateModal;
