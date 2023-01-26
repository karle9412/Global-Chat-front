import SearchList from "./SearchList";
import { authheader } from "../../service/ApiService";
import useIntersection from "../../hooks/useIntersection";
import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import axios from "axios";

const SearchBoardList = ({ searchDataList }) => {
  authheader();



  return (
      <div className="searchItem">
        <div className="content">
          {searchDataList.map((item, idx) => (
            <React.Fragment key={idx}>
              <SearchList key={item.bno} {...item} />
            </React.Fragment>
          ))}
          {/* {!loading && <div ref={setObservationTarget}></div>} */}
        </div>
      </div>
  );
};

export default SearchBoardList;