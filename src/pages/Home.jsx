import React from 'react'
import Links from '../components/links/Links'
import SongPreview from '../components/songPreview/SongPreview'
import './home.css'

export default function Home() {
    return (
        <div className="home">
            <div className="logo">Novacane</div>
            <SongPreview/>
            <div className="homeLinks">
                <Links/> 
            </div> 
        </div>
    )
}
