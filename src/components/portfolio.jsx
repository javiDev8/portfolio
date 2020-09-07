import React from 'react'

import '../styles/portfolio.scss'

const projects = [
    <Project
        imgSrc="https://picsum.photos/200/300"
        description="lorem ipsum dolor sit ameeeeet"
    />,
    <Project
        imgSrc="https://picsum.photos/200/300"
        description="just another description"
    />,
]

export default () => {
    return <div id="portfolio">{projects}</div>
}

function Project({ imgSrc, description }) {
    return (
        <div className="project">
            <img
                onClick={() => setShowDescription(!showDescription)}
                src={imgSrc}
            />
            <p className="description">{description}</p>
        </div>
    )
}
