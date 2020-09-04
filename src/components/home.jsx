import React from 'react'

import Icons from './icons.jsx'

import '../styles/home.scss'

export default () => (
    <div className="home">
        <div className="back" />
        <div className="card">
            <span className="hello">Hola, soy Javi</span>
            <div>
                <span className="js">Javascript </span>
                <span className="fs">fullstack </span>
            </div>
            <span className="dev">developer.</span>
        </div>
        <Icons />
    </div>
)
