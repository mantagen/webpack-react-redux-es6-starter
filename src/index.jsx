import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './app.jsx'

import About from './routes/about.jsx'
import Contact from './routes/contact.jsx'
import NoMatch from './routes/no-match.jsx'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
  ),
  document.getElementById('app-container')
)
