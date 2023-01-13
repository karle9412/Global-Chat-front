import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Header from './components/Header'
import ChatRoom from './components/ChatRoom';
import Registry from './components/Registry/Registry';
import Interest from './components/Interest';
import GoogleLoginButton from './components/login/GoogleLoginButton'
import Board from './components/board/Board';
import Login from './components/login/Login';
import FindId from './components/login/FindId';
import FindPw from './components/login/FindPw';


const App = () => {
  return (
    <>
   <BrowserRouter>
    <Routes>
     
     <Route path='/' element={<Home/>} />
     <Route path='/profile' element={<Profile/>} />
     <Route path='/chatroom' element={<ChatRoom/>} />
     <Route path='/registry' element={<Registry/>} />
     <Route path='/interest' element={<Interest/>} />
     <Route path='/googleLoginButton' element={<GoogleLoginButton/>} />
     <Route path='/board' element={<Board/>}/>
     <Route path='/login' element={<Login/>} />
     <Route path='/findId' element={<FindId/>} />
     <Route path='/findPw' element={<FindPw/>} />
     
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;