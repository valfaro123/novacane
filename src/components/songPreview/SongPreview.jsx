import React from 'react'
import './songPreview.css'
export default function SongPreview() {
    return (
        <div className="songPreview">
            
            <iframe title="songPlayer" className="player" src="https://open.spotify.com/embed/track/6Kc8o87oIyExCYhBTferEV?utm_source=generator" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    )
}
