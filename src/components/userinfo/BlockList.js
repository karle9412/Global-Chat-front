import React, { useEffect, useState } from "react";
import './BlockList.css';
import { authheader } from "../../service/ApiService";
import axios from "axios";
import UserImg from "../Reply/UserImg";
import BlockListUserName from "./BlockListUserName.js";
import Layout from "../Layout";


const BlockList = () => {
  const [blockList, setBlockList] = useState([])

  useEffect(()=> {
    authheader()
    axios.get('http://localhost:8080/friendlist/block/0',)
  .then(response => {
    setBlockList(response)
  })
  .catch(error => {
    alert("유저 정보 불러오기 실패")
    console.error(error);
  });
}, [])
  console.log(blockList.data)



  return (
    <>
    <Layout>
        <div className="BlockListForm">
          <div className="BlockDiv">
            <div>프로필</div>
            <hr className="Block-hr" />
            <div>비밀번호변경</div>
            <hr className='Block-hr' />
            <div>푸시알림</div>
            <hr className='Block-hr' />
            <div>친구관리</div>
            <hr className='Block-hr' />
          </div>
          <hr className='Block-hr' />
          <div className="BlockDiv">
            <div>친구관리</div>
            <hr className='Block-hr' />
            {blockList.data != null &&
              blockList.data.map((block) =>
                <div className= "block-profile-div" key={block.id}>
                  <div className="block-profile-box">
                  <UserImg email={block.requireemail}/>
                  </div>
                  <BlockListUserName email={block.requireemail}/>
                </div>
              )}

          </div>
        </div>  
      </Layout>
    </>
  )
}

export default BlockList