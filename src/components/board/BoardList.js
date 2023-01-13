import { useEffect, useState } from "react";
import axios from "axios";
import SearchList from "./SearchList";
import './boardCss/BoardList.css';
import { authheader } from "../../service/ApiService";


const BoardList = () => {

    authheader();

    
    const [allDataList, setAlldataList] = useState([]);


    useEffect(() => {
        axios.get('/board/list')
        .then((res) => {
            setAlldataList(res.data)
            console.log(res.data)})
        .catch((error)=>{console.log(error)})
    }, []);

    return (
        <div className="boardList">
            <div className="content">
                {allDataList.map((item) => (
                    <SearchList key={item.bno} {...item} />
                ))}
            </div>
        </div>
    )
}

export default BoardList;