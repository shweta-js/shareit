import React from 'react'
import CardPost from '../components/CardPost'
import ExploreCard from '../components/ExploreCard'
import "./Explore.css"
const Explore = () => {
    return (
        <div className="explore">
        <p>see all</p>
            <div className="cp"><CardPost/></div>
            <div className="cp"><CardPost/></div>
            <div className="cp"><CardPost/></div>
            <div className="cp"><CardPost/></div>
        <p>explore section</p>   
        <div className="exp-card"><ExploreCard/></div>
        <div className="exp-card"><ExploreCard/></div>
        <div className="exp-card"><ExploreCard/></div>
        <div className="exp-card"><ExploreCard/></div>
        <div className="exp-card"><ExploreCard/></div>

        </div>
    )
}

export default Explore
