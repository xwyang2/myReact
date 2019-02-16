import React from 'react'
import './header.css'
export default class Header extends React.Component{
    render(){
        return(
            <div className="header clear">
                <div className="search">
                    <input type="button"/>
                    <input type="text" placeholder="请输入商品名称"/>
                </div>
                <span></span>
            </div>
        )
    }
}