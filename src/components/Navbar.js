// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props){
 
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">NewsMonkey</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/business">business</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/science">Science</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/sports">Sports</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/education">Education</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

// export default class Navbar extends Component {
//     //   static propTypes = {second: third}

//     render() {
       
//     }
// }
