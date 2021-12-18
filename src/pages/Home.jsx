import React from 'react'
import Links from '../components/links/Links'
import SongPreview from '../components/songPreview/SongPreview'
import Logo from '../svg/Logo'
import './home.css'


export default function Home() {
    return (
        <div className="home">
            <Logo/>
            <SongPreview/>
            <div className="homeLinks">
                <Links/> 
            </div> 
        </div>
    )
}
