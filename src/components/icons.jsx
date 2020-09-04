import React, { useRef, useState, useEffect } from 'react'

import '../styles/icons.scss'

import NodejsIcon from '../assets/icons/nodejs-seeklogo.com.svg'
import ReactIcon from '../assets/icons/reactjs-icon.svg'
import WebpackIcon from '../assets/icons/webpack-seeklogo.com.svg'
import NginxIcon from '../assets/icons/nginx-icon.svg'

const icons = [
    <NodejsIcon id="nodeicon" />,
    <ReactIcon id="reacticon" />,
    <WebpackIcon id="webpackicon" />,
    // <NginxIcon id='nginxicon'/>
]

// export default () =>
//     icons.map(i => (
//         <div id="icons">
//             <div className="animated">{i}</div>
//         </div>
//     ))

export default () => {
    const timer = useRef()
    const [index, setIndex] = useState(0)
    const incrementCount = () =>
        setIndex(c => (c < icons.length - 1 ? c + 1 : 0))
    useEffect(() => {
        timer.current = setInterval(incrementCount, 4000)
        return () => clearInterval(timer.current)
    }, [])
    return (
        <div id="icons">
            <div className="animated" key={index}>
                {icons[index]}
            </div>
        </div>
    )
}
