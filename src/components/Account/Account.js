import React from 'react'
import './account.css'
import commonJpg2 from "../../assets/imgs/common2.jpg"
import commonJpg from "../../assets/imgs/common.jpg"

import {connect} from 'react-redux'
import * as types from '../../store/types'


class Account extends React.Component{
    render(){
        return(
            <div className="account">
                <h3 className="title">用户</h3>
                <button onClick={this.props.exitLogin}>{this.props.user.islogged?"退出登录":"未登录"}</button>
                <div className='user'>
                    <div onClick={this.login.bind(this)}><span className="user_l"><img src={this.props.user.head_img?this.props.user.head_img:commonJpg} alt=""/></span><span className="user_r">{this.props.user.islogged?this.props.user.name:'登录'}</span></div>
                </div>
                <div className="othercontent">
                    <h3>资产</h3>
                    <p>
                        <span className="content">余额：{this.props.user.remain}</span>
                    </p>
                </div>
                <div className="othercontent">
                    <h3>收藏</h3>
                    <p>
                        <span className='headImg'><img src={commonJpg2} alt=''/><em>收藏的商品</em></span>
                        <span className='headImg'><img src={commonJpg2} alt=''/><em>收藏的店铺</em></span>
                        <span className='headImg'><img src={commonJpg2} alt=''/><em>收藏的xx</em></span>
                        <span className='headImg'><img src={commonJpg2} alt=''/><em>其它</em></span>
                    </p>
                </div>
                <div className="othercontent">
                    <h3>订单</h3>
                    <p>
                     <span className='headImg'><img src={commonJpg2} alt=''/><em>支付</em></span>
                     <span className='headImg'><img src={commonJpg2} alt=''/><em>发货</em></span>
                     <span className='headImg'><img src={commonJpg2} alt=''/><em>收货</em></span>
                     <span className='headImg'><img src={commonJpg2} alt=''/><em>退货</em></span>
                    </p>
                </div>
                <div className="othercontent">
                    <h3>工具</h3>
                    <p>
                        <span className='headImg'><img src={commonJpg2} alt=''/><em>邮件</em></span>
                        <span className='headImg'><img src={commonJpg2} alt=''/><em>地图</em></span>
                        <span className='headImg'><img src={commonJpg2} alt=''/><em>导航</em></span>
                        <span className='headImg'><img src={commonJpg2} alt=''/><em>周围</em></span>
                    </p>
                </div>
            </div>
        )
    }
    componentDidMount() {
    }
    login(){
        if(this.props.user.islogged){return;}
        else{
            this.props.history.push({pathname:'/login'})
        }
    }
}

const MapStateToProps = state => ({
    user:state.user
});
const MapDispatchToProps = dispatch => ({
    exitLogin:()=>dispatch({type:types.CHECK_USER,payload:{islogged:false}})
});


export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Account);