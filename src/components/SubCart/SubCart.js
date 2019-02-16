import React from 'react'
import './shopping.css'
export default class SubCart extends React.Component{
    constructor(props){
        super(props);
        this.add=this.add.bind(this);
        this.cut=this.cut.bind(this);
        this.del=this.del.bind(this);
        this.subChange=this.subChange.bind(this)
    }
    add(){
        this.props.add(this.props.item.id)
    }
    cut(){
        this.props.cut(this.props.item.id)
    }
    del(){
        this.props.del(this.props.item.id)
    }
    subChange(e){
         e.target.checked?this.props.itemStatus(this.props.item.id,true):this.props.itemStatus(this.props.item.id,false);
    }
    render(){
        return(
            <div className="goodsInfo">
                <ul className="infoList">
                    <li className="infoItem">
                        <input type="checkbox" checked={this.props.item.checked} onChange={this.subChange}/>
                    </li>
                    <li className="infoItem2"><img src={this.props.item.src[0]} alt=''/></li>
                    <li className="infoItem3">{this.props.item.subitem}</li>
                    <span className='del' onClick={this.del} >删 除</span>
                </ul>
                <ul className="infoList2">
                    <li className="num">数量：
                        <button onClick={this.add}>+</button>
                        <span>{this.props.item.num}</span>
                        <button disabled={this.props.item.num===1?'disabled':''} onClick={this.cut}>-</button>
                    </li>
                    <li className="eachPrice">单价:￥{this.props.item.price}</li>
                    <li className="eachPrice">小计：￥{this.props.item.num * this.props.item.price}</li>
                </ul>
            </div>
        )
    }
}