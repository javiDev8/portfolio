import React from 'react'
import { render } from 'react-dom'

import App from './components/app.jsx'
import Footer from './components/footer.jsx'

render(<App />, document.getElementById('app'))
render(<Footer />, document.getElementById('footer'))
