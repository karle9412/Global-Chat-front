import SearchList from "./SearchList";
import { authheader } from "../../service/ApiService";
import useIntersection from "../../hooks/useIntersection";
import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import axios from "axios";

const SearchBoardList = ({ searchDataList, setSearchDataList, searchItem }) => {
  authheader();

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const getItems = useCallback(async () => {
    setLoading(true);
    await axios
      .get(`/board/search/${searchItem}/${page}`)
      .then((res) => {
        setSearchDataList((prevState) => [...prevState, ...res.data]);
        console.log(res.data);
      })
      .catch((error) => {
        setPage(0);
      });
    setLoading(false);
  }, [page]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  const setObservationTarget = useIntersection(getItems);

  return (
      <div className="searchItem">
        <div className="content">
          {searchDataList.map((item, idx) => (
            <React.Fragment key={idx}>
              <SearchList key={item.bno} {...item} />
            </React.Fragment>
          ))}
          {!loading && <div ref={setObservationTarget}></div>}
        </div>
      </div>
  );
};

export default SearchBoardList;
