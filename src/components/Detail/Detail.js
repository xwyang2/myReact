import React from 'react'
import {Link} from 'react-router-dom'
import Slider from '../../common/Slider/Slider'
import commonJpg from '../../assets/imgs/common.jpg'
import detail01 from '../../assets/imgs/detail01.jpg'
import detail02 from '../../assets/imgs/detail02.jpg'
import './detail.css'
export default class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imgs:["","","",""],
            data:[],
        };
        this.goBack=this.goBack.bind(this)
        this.addCart=this.addCart.bind(this)
    }
    render(){
        return(
            <div className="detail">
                <Slider imgs={this.state.imgs}/>
                <button onClick={this.goBack}>&lt;</button>
                <p className='des'>{this.state.data.subitem}</p>
                <p className='price'><i>￥&nbsp;{this.state.data.price}</i><em>赚&nbsp;&nbsp;￥{this.state.data.price}</em></p>
                <div className='details'>{this.state.data.details}</div>
                <div className="othercontent">
                    <h3>官方品控师</h3>
                        <p>
                            <span className="headImg"><img src={commonJpg} alt=""/><em>孙大尾</em></span>
                            <span className="content">货源可靠、值得信赖，是一件非常值得购买的产品，物美价廉</span>
                        </p>
                </div>
                <div className="othercontent">
                        <h3>宝贝赛单</h3>
                        <p>
                            <span className="headImg"><img src={commonJpg} alt=""/><em>孙小尾</em></span>
                            <span className="content">好高兴好高兴哈哈哈哈哈</span>
                        </p>
                </div>
                <div className='bottom'>
                         <Link to="/chart" className="serve"><img src={detail01} alt=""/><em>客服</em></Link>
                         <Link to="/cart" className="serve"><img src={detail02} alt=""/><em>购物车</em></Link>
                         <span onClick={this.addCart}>加入购物车</span>
                         <span>赚&nbsp;￥&nbsp;88</span>
                </div>
            </div>
        )
    }
    goBack(){
        this.props.history.go(-1)
    }
    addCart(){
        let GoodsId=this.props.match.params.id-0;
        let GoodsObj={
                    id:GoodsId,
                    num:1,
        };
        let storage=window.localStorage;
        if(storage['GoodsInfo']){
            let GoodsArr=JSON.parse(storage['GoodsInfo']);
            let isOld=false;
            GoodsArr.forEach((item)=> {
                if (GoodsId === item.id) {
                    item.num++;
                    isOld = true;
                }
            })
            if (isOld) {
                storage['GoodsInfo']=JSON.stringify( GoodsArr)
            }else {
                GoodsArr.push(GoodsObj);
                storage['GoodsInfo']=JSON.stringify( GoodsArr)
            }
        }else{
            let GoodsArr=[];
            GoodsArr.push(GoodsObj);
            storage['GoodsInfo']=JSON.stringify( GoodsArr)
        }
    }
    componentDidMount(){
                // console.log(this.props.match.params.id);
                let id=this.props.match.params.id-0;
                fetch(
                  `/data/detail.json`
                ).then(
                  res=>res.json()
                ).then(
                 data=>{
                     data.data.forEach((item)=>{
                         if (id===item.id) {
                             this.setState({data:item,imgs:item.src})
                         }
                     })
                 }
                )
    }
}