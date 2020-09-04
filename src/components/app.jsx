import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './navbar.jsx'
import Footer from './footer.jsx'

import Home from './home.jsx'
import Contact from './contact.jsx'
import About from './about.jsx'

import '../styles/app.scss'

export default () => (
    <Router id="mainContainer">
        <Navbar />
        <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route component={() => <h1>404</h1>} />
        </Switch>
    </Router>
)
