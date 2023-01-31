import axios from "axios";
import React,{ useEffect } from "react";
import { authheader } from "../service/ApiService";

const useTranslate = () => {
  const check = "이거 되냐?"
  useEffect(()=> {
    authheader()
    axios.get('/translate/check',{text : check}).then(res => console.log(res))
  },[])
  
  return(<>안녕</>)
}

export default useTranslate;