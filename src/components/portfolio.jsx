import React from 'react'

import '../styles/portfolio.scss'

import TreeDoImg from '../assets/images/treeDo.jpg'
import OtorrinoImg from '../assets/images/otorrino.png'

export default () => (
    <div id="portfolio">
        <div className="project">
            <img src={TreeDoImg} />
            <div className="description">
                <p>
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                    ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                    dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
                    sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
                    amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                    ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                    dolor sit amet
                </p>
                <div className="space" />
                <div className="links">
                    <a href="#">APK en expo</a>
                    <a href="#">Repositorio en Github</a>
                </div>
            </div>
        </div>
        <div className="project">
            <img src={OtorrinoImg} />
            <div className="description">
                <p>
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                    ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                    dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
                    sit amet lorem ipsum dolor sit amet ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                    ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                    dolor sit amet
                </p>
                <div className="space" />
                <div className="links">
                    <a href="#">Enalce al sitio</a>
                    <a href="#">Repositorio en Github</a>
                </div>
            </div>
        </div>
    </div>
)

// const projects = [
//     <Project
//         links={[
//             {
//                 key: 'apk en expo',
//                 link:
//                     'https://expo.io/dashboard/javidev8/builds/c7da3c42-00b8-4654-9ee0-c9fc3ec5aeeb',
//             },
//             {
//                 key: 'Repositorio en Github',
//                 link: 'https://github.com/javiDev8/TreeDo',
//             },
//         ]}
//         Img={TreeDoImg}
//         description="lorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit amet"
//     />,
//     <Project
//         links={[
//             { key: 'enlace al sitio', link: 'https://otorrinofatimarizo.com' },
//             {
//                 key: 'Repositorio en Github',
//                 link: 'https://github.com/javiDev8/appointments',
//             },
//         ]}
//         Img={OtorrinoImg}
//         description="otorrinolorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit ametlorem ipsum dolir sit amet"
//     />,
// ]

// export default () => {
//     return <div id="portfolio">{projects}</div>
// }

// function Project({ Img, description, links }) {
//     return (
//         <div className="project">
//             <img src={Img} />
//             <p className="description">{description}</p>

//             <div className="description">
//                 {
//                     (description,
//                     links.map(link => (
//                         <a key={link.key} href={link.link}>
//                             {link.key}
//                         </a>
//                     )))
//                 }
//             </div>
//         </div>
//     )
// }
