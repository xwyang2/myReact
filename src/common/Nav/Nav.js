import React from 'react'
import {NavLink} from 'react-router-dom'
import './nav.css'
export default class Nav extends React.Component{
    render(){
        return(
            <div className="nav clear">
                <ul className="clear">
                    <li><NavLink activeClassName="active" to="/home">推荐</NavLink></li>
                    <li><NavLink activeClassName="active" to="/beauty">美妆</NavLink></li>
                    <li><NavLink activeClassName="active" to="/house">家纺</NavLink></li>
                    <li><NavLink activeClassName="active" to="/sport">运动</NavLink></li>
                    <li><NavLink activeClassName="active" to="/bus">汽车</NavLink></li>
                    <li><NavLink activeClassName="active" to="/electric">电器</NavLink></li>
                </ul>
                <span className="nav_r"></span>
            </div>
        )
    }
}