import React, { Component } from 'react'
import './../MonthApp.css'

export class Header extends Component {
    render() {
        return (
            <div id="head" >
                <button id="Pbut" type="button">Back to project</button>
                <button id="Lbut" type="button"> Sep</button>
                <button id="Rbut" type="button">Nov</button>
                <button id="Lgbut" type="button">Log off</button>
                <h1>October 2020</h1>
            </div>
        )
    }
}

export default Header
