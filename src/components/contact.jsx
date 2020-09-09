import React, { useRef } from 'react'
import axios from 'axios'

import '../styles/contact.scss'

export default () => {
    const submit = () => {
        event.preventDefault()

        axios({
            url: '/api/contact',
            method: 'post',
            data: {
                name: nameInput.value,
                emal: emailInput.value,
                message: msgInput.value,
            },
        })
    }

    let nameInput = useRef(null)
    let emailInput = useRef(null)
    let msgInput = useRef(null)

    return (
        <form className="form">
            <div className="header">
                <h2>Contáctame rápidamente</h2>
                <span>o mandame un email a me@devjavi.xyz</span>
            </div>
            <input
                className="input"
                ref={r => (nameInput = r)}
                placeholder="nombre"
                type="text"
            />
            <input
                className="input"
                ref={r => (emailInput = r)}
                placeholder="email"
                type="email"
            />
            <textarea
                className="input"
                ref={r => (msgInput = r)}
                placeholder="mensaje"
                type="text"
                rows={6}
            />
            <button onClick={submit}>
                Enviar
            </button>
        </form>
    )
}
