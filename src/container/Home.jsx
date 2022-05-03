import React from 'react'
import Navbar from '../components/Navbar.js'
import Posts from '../components/Posts.js'
import Stories from "../components/Stories.js"
import "./Home.css"
const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="home-1">
            <Stories/>
            <Posts/>
            </div>
            
        </div>
    )
}

export default Home

