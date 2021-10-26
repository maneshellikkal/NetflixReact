import React, { useEffect } from 'react'
import {API_KEY} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
       
        
    }, [])
    return (
        <div className="banner">
            <div className="content">
                <h1 className='title'>Movie Name</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">This is a wonderful movie</h1>
            </div>
            <div className="fade-bottom"></div>
            
        </div>
    )
}

export default Banner
