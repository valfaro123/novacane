import React from 'react'
import './songPreview.css'
export default function SongPreview() {
    return (
        <div className="songPreview">
            <iframe className="player" src="https://open.spotify.com/embed/track/2GE1I0MRE0PzIN1Vdc6lbE?utm_source=generator&theme=0"  frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    )
}
