import React, { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import SearchList from "./SearchList";
import "./boardCss/BoardList.css";
import { authheader } from "../../service/ApiService";
import useIntersection from "../../hooks/useIntersection";

const BoardList = () => {
  
  authheader();


  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingMent, setLoadingMent] = useState("");


  const getItems = useCallback(async () => {
    setLoading(true);
    await axios
      .get(`/board/list/${page}`)
      .then((res) => {
        setItems((prevState) => [...prevState, ...res.data]);
      })
      .catch((error) => {
        setPage(0);
        if(error.response.status === 404 || error.response.status === 400 
          || error.response.status === 500) {
          setLoadingMent("아직 게시글이 없습니다.");
          }
      });
    setLoading(false);
  }, [page]);


  const setObservationTarget = useIntersection(getItems);


  return (
    <div className="boardList">
      <div className="content">
        {loading && <div className="loading">Loading...</div>}
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <SearchList key={item.bno} {...item} />
          </React.Fragment>
        ))}
        {!loading && <div ref={setObservationTarget}></div>}
      </div>
    </div>
  );
};

export default BoardList;
