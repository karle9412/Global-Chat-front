import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FindId.css';

export default function FindId() {

    const [inputValue, setInputValue] = React.useState('');
    const handleChange = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if(regex.test(e.target.value)){
            setInputValue(e.target.value);
        }
    }

    useEffect(() => {
        if(inputValue.length === 10){
            setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
            console.log(inputValue);
        }
        if(inputValue.length === 13){
            setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
            console.log(inputValue);
        }
    
    }, [inputValue]);


    return (
        <>
            <div className='findIdDiv'>
                <h1 className='h1'>글랜챗</h1>
                
                    <div className='findIdForm'>
                     <h3 className='h3'>아이디 찾기</h3>
                     <hr className='hr'/>
                    
                        <div className='boxDiv'>
                            <input className='telBox' type="text" 
                            placeholder='휴대폰 번호를 입력해주세요.' onChange={handleChange} value={inputValue}></input>
                            <button className='authBtn' type='button'>인증번호</button>
                        </div>

                        <div className='boxDiv2'>
                            <input className='authBox' type="text"
                            placeholder='인증번호를 입력해주세요.'></input>
                            <button className='authBtn2' type='button'>인증확인</button>
                        </div>

                        <div className='boxDiv3'>
                            <Link to='/findPw'>비밀번호를 잊어버리셨나요? 여기를 클릭하세요!</Link>
                        </div>
                    </div>
            </div>

        </>
    );
}

