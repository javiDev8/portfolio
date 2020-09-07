import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

import MenuIcon from '../assets/icons/menu.svg'

import '../styles/nav.scss'

const navs = [
    { key: 'Inicio', path: '/' },
    { key: 'Portafolio', path: '/portfolio' },
    { key: 'Acerca de', path: '/about' },
    { key: 'Contacto', path: '/contact' },
]

export default withRouter(props => {

    const [menuClass, setMenuClass] = useState('bar')
    const [currentPath, setCurrentPath] = useState('/')

    useEffect(() => setCurrentPath(props.history.location.pathname), [props])

    return (
        <div className="navbar">
            <div className="space" />
            <div id="mobileBtn">
                <div className="space" />
                <button
                    onClick={() =>
                        setMenuClass(menuClass === 'bar' ? 'ham' : 'bar')
                    }
                >
                    <MenuIcon className="icon" />
                </button>
            </div>
            <div className={menuClass}>
                {navs.map(nav => (
                    <Link
                        onClick={() => setMenuClass('bar')}
                        key={nav.key}
                        to={nav.path}
                    >
                        <button
                            className={
                                currentPath === nav.path ? 'current' : null
                            }
                        >
                            {nav.key}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
})
