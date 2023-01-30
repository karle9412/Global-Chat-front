import { useState } from "react";
import axios from "axios";
import "./boardCss/UpdateModal.css";

const UpdateModal = (props) => {
  const { open, close, header, bno } = props;

  const [boardContent, setBoardContent] = useState(props.boardContent);

  const handleChange = (e) => {
    setBoardContent(e.target.value);
  };

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
