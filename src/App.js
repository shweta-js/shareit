import React from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import Explore from './container/Explore';
import Stories from './container/Stories';
import Upload from './container/Upload';
import Profile from './container/Profile';
const App=()=>{
    return(
       <Routes>
           <Route path="login" element={<Login />}/>
           <Route path="/*" element={<Home />}/>
           <Route path="/explore" element={<Explore />} />
           <Route path="/upload" element={<Upload />}/>
           <Route path="/stories" element={<Stories />}/>
           <Route path="/profile" element={<Profile />}/>
           
       </Routes>
    )
}
export default App