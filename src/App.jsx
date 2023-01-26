import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/userinfo/Profile';
import ChatRoom from './components/ChatRoom';
import Registry from './components/Registry/Registry';
import Interest from './components/Interest';
import GoogleLoginButton from './components/login/GoogleLoginButton'
import Board from './components/board/Board';
import Login from './components/login/Login';
import FindId from './components/login/FindId';
import FindPw from './components/login/FindPw';
import Changepw from './components/userinfo/Changepw';
import Alarm from './components/userinfo/Alarm';
import BlockList from './components/userinfo/BlockList';


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
     <Route path='/changepw' element={<Changepw/>} />
     <Route path='/alarm' element={<Alarm/>} />
     <Route path='/blocklist' element={<BlockList/>}/>
     <Route path='/profile' element={<Profile />}/>
     
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;