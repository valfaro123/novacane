import React from 'react'
import './songPreview.css'
export default function SongPreview() {
    //temp add youtube inteview 
    return (
        <div className="songPreview">
            {/* <iframe title="songPlayer" className="player" src="https://open.spotify.com/embed/track/6Kc8o87oIyExCYhBTferEV?utm_source=generator" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}

            <iframe width="560" height="315" src="https://www.youtube.com/embed/XzTB04lwIaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
