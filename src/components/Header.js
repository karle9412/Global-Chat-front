import { useEffect, useState } from "react";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import { BsFillHouseDoorFill } from "react-icons/bs";
import {IoChatbubbleOutline} from "react-icons/io5";
import {IoChatbubble} from "react-icons/io5";
import {IoChatbubblesOutline} from "react-icons/io5"
import {BsPeopleFill} from "react-icons/bs";
import {BsPersonCircle} from "react-icons/bs";

export default function Header({}) {
    const [isClick, setIsClick] = useState(false);
    const navigate = useNavigate();
    
    const handleClick = useCallback(() => {
        
        

        
        setIsClick(!isClick);
        setTimeout(() => {
            navigate('/chatroom');
        }, 300);
      }, [isClick]);

      
    

    return(
        <>
        <header>
                <div>
                    <BsFillHouseDoorFill size={30} >
                    </BsFillHouseDoorFill>
                </div>
                <div>
                    {isClick ? <IoChatbubble className='1' size={30} />: <IoChatbubbleOutline className='2' size={30} onClick={handleClick}/>} 
                    {/* <IoChatbubbleOutline color={'#000'}size={30} onClick={handleClick}/>
                    {isClick && <IoChatbubble size={30} color={'#000'} />} */}
                </div>
                <div>
                    <IoChatbubblesOutline size={30} >
                    </IoChatbubblesOutline>
                </div>
                <div>
                    <BsPeopleFill size={30}/>
                    <BsPersonCircle size={30}/>
                </div>
        </header>
        </>
    )
}



