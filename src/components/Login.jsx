import React from 'react';
import GoogleLogin from 'react-google-login';
import { userNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import "./Login.css"
const Login = () => {
    return (
        <div className="flex justify-start
        items-center flex-col h-screen">
        <div className="relative w-full
        h-full">
            <video 
                src={shareVideo}
                type="video/mp4"
                loop
                controls={false}
                muted
                autoPlay
                className="w-full h-full
                object-cover"
            />
            <div>
                <div className="p-5">
                    <img  className="logo-white-center" src={logo} width="130px" alt="logo"/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login
