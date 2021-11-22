import React from 'react'
import './links.css'
import { LinkContent } from './LinkContent'
export default function Links() {
    return (
        <div className="links">
            {LinkContent.map((link,index) => {
                return(
                    <div key={index} className="link">
                        <a href={link.url}><i className={link.icon}/> {link.label}</a>
                    </div>
                )
            })}
        </div>
    )
}
