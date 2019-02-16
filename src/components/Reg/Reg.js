import React from 'react'
import {Link} from 'react-router-dom'
export default class Login extends React.Component{
    render(){
        return(
            <div className="login reg">
                <h3 className="title">注册</h3>
                <button onClick={()=>{this.props.history.go(-1)}} className="back">&lt;</button>
                <Link to="/reg" className='sign'>注册</Link>
                <p className='userinfo'><label htmlFor="username" className="labels">用户名:</label><input type="text" id="username" className="infomation"/></p>
                <p className='userinfo'><label htmlFor="password" className="labels">密码:</label><input type="password" id="password" className="infomation"/></p>
                <p><button className='submit'>提交</button></p>
            </div>
        )
    }
    componentDidMount() {
    }
}