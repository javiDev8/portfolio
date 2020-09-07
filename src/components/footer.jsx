import React from 'react'

import '../styles/footer.scss'
import GithubIcon from '../assets/icons/iconmonstr-github-1.svg'
import EmailIcon from '../assets/icons/email-svgrepo-com.svg'

export default () => (
    <div id="footer">
        <div>
            <a
                href="https://github.com/javiDev8"
                target="_blank"
                rel="noopener noreferrer"
		id='github'
            >
                <GithubIcon className='icon' /> Github
            </a>
            <span id='email'>
                <EmailIcon className='icon' /> me@devjavi.xyz
            </span>
        </div>
    </div>
)
