import React from 'react'
import {Link} from 'react-router-dom'
import './goodslist.css'
export default class GoodsList extends React.Component{
    render(){
        return(
            <div>
                <ul className="goodslist">
                    { this.props.list.map((item)=>{
                        return <li key={item.id}><Link to={{pathname:"/detail/"+item.id,search:"?dataName="+this.props.dataName}}>
                            <img src={item.src} alt=""/>
                            <p className="over">{item.subitem}</p>
                            <i>￥{item.price}</i>
                            <em>赚&nbsp;￥&nbsp;{item.price}</em>
                        </Link></li>
                    })}
                </ul>
            </div>
        )
    }
}