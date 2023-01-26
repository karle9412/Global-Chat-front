import { useState } from "react";
import axios from "axios";
import "../board/boardCss/Modal.css";

const WriteModal = (props) => {
  const { open, close, header } = props;

  const [boardContent, setBoardContent] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .post("/board/write", {
        boardContent: value,
      })
      .then((res) => {
        setValue(res.data);
        setBoardContent(res.data);
        console.log(value);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
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
              <textarea className="modalContent" onChange={handleChange}>
                {boardContent}
              </textarea>
            </div>
          </main>
          <footer>
            <button className="saveBtn" onClick={handleSubmit}>
              저장
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

export default WriteModal;
