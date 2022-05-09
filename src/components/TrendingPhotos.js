import React from 'react';
import tp1 from "../assets/tp1.jpg"
import tp2 from "../assets/tp2.jpg"
import tp3 from "../assets/tp3.gif"
import tp4 from "../assets/tp4.gif"
import tp5 from "../assets/tp5.jpg"
import tp6 from "../assets/tp6.jpg"
import { NavLink } from 'react-router-dom';
import "./TrendingPhotos.css"
const TrendingPhotos = () => {
    return (
        <div>
           <div>
               <p className="trendingpix-heading">Trending Photos</p>
               <div className="trendingpics">
                   <img src={tp1} alt="trending photo1"/>
                  <img src={tp2} alt="trending photo2"/>
                  <img src={tp3} alt="trending photo3"/>
                  <img src={tp4} alt="trending photo4"/>
                  <img src={tp5} alt="trending photo5"/>
                  <img src={tp6} alt="trending photo6"/>
               </div>
           </div>
        </div>
    )
}

export default TrendingPhotos
