import React, { Component } from 'react'

class Headers extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://www.linkedin.com/in/sidneytyronewilliams/" className="navbar-brand"> Home | </a>
                        <a href="https://www.linkedin.com/in/bruce-baranowski/ " className="navbar-brand"> Contact us | </a>
                        <a href="https://www.linkedin.com/in/antoniorodriguez38/" className="navbar-brand"> About us | </a>
                       
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Headers