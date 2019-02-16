import React from 'react'
import {Link} from 'react-router-dom'
import './login.css'

import {connect} from 'react-redux'
import asynUser from '../../store/actions/asynUser';



class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            UserNameMsg:"",
            PasswordMsg:"",
        }
    }
    render(){
        return(
            <div className="login reg">
                <h3 className="title">登录</h3>
                <button onClick={()=>{this.props.history.go(-1)}} className="back">&lt;</button>
                <Link to="/reg" className='sign'>注册</Link>
                <p className='userinfo'>
                    <label htmlFor="username" className="labels">用户名:</label>
                    <input type="text" id="username" className="infomation"
                     value={this.state.UserNameMsg} onChange={(e)=>{this.setState({UserNameMsg:e.target.value})}}/>
                </p>
                <p className='userinfo'>
                    <label htmlFor="password" className="labels">密码:</label>
                    <input type="password" id="password" className="infomation"
                    value={this.state.PasswordMsg} onChange={(e)=>{this.setState({PasswordMsg:e.target.value})}}/>
                </p>
                <p className='userinfo'><input type="checkbox" id="checks" className="checks"/><label htmlFor="checks" className="label2">？记住密码</label></p>
                <p><button className='submit' onClick={this.props.handleSubmit.bind(null, this.state.UserNameMsg, this.state.PasswordMsg, this.props.history)}>提交</button></p>
                <p className="title2">{this.props.islogged?"验证成功，马上跳转":"请输入正确的用户名和密码"}</p>
            </div>
        )
    }
    componentDidMount(){

    }

}

const MapStateToProps = state => ({
islogged: state.user.islogged
});
const MapDispatchToProps = dispatch => ({
    handleSubmit: (username, password, history) => dispatch(asynUser({
        url: '/data/user.json',
        username, password
    })).then(
        (checked)=>{
            console.log(checked)
            if (checked) {
                window.setTimeout(()=>{history.push({pathname:'/account',search:'?userName='+username})},3000);
            }
        }
    )
});


export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Login);