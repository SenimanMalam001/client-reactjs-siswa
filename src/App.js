import React, { Component } from "react"
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Home from "./components/Home"
import Siswa from "./components/Siswa"
import SiswaPost from "./components/SiswaPost"
import SiswaEdit from "./components/SiswaEdit"
import SiswaDelete from "./components/SiswaDelete"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">React Express App</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to={'/siswa'} className="nav-link">Siswa</Link></li>
              </ul>
              <hr />
            </div>
          </nav> <br/>
          <div className="content">
              <Route exact path='/' component={ Home } />
              <Route exact path='/siswa' component = { Siswa } />
              <Route exact path='/siswa/create' component = { SiswaPost } />
              <Route exact path="/siswa/edit/:index" exact component = { SiswaEdit } />
              <Route exact path="/siswa/delete/:index" exact component = { SiswaDelete } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;