import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/nav.scss'

export default () => (
    <div className="navbar">
        <div className="space" />
        <div className="navs">
            <Link to="/">
                <button>Inicio</button>
            </Link>
            <Link to="/contact">
                <button>Contacto</button>
            </Link>
            <Link>
                <button>Portafolio</button>
            </Link>
            <Link to="/about">
                <button>Acerca de</button>
            </Link>
        </div>
    </div>
)
