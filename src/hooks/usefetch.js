import axios from "axios"
import React, { useEffect, useState } from "react"
import { authheader } from "../service/ApiService"

export default function useImg(url){
    const [result, setResult] = useState([]);
    
    authheader()
    useEffect(()=> {
      axios.get(url)
    .then(result => {
        setResult(result)
    })
    
    }, [])

  
  return result
  
}