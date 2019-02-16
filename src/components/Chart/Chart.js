import React from 'react'
import {Link} from 'react-router-dom'
import './chart.css'
export default class Chart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            server: [
                '你好，亲，请问有什么需要服务',
            ],
            list:[],
            msgInput: '',
            isShow:false,
        };
        this.send=this.send.bind(this);
    }
    render(){
        return(
            <div className="chart">
                <h3 className="title">聊天</h3>
                <Link to='/home' className="back">&lt;</Link>
                <ul className='msgBox'>
                    {this.state.server.map((item, index) => {
                        return <li className='server' key={index}>
                            {item}
                        </li>
                    })}
                    {this.state.list.map((item,index)=>{
                        return <li className='client' key={index}>
                                    {item}
                              </li>
                    })}
                </ul>
                { this.state.isShow && <div className='alarm'>不可以发送空消息</div>}
                <div className='sendBox'>
                    <input type="text" className='sendMsg' value={this.state.msgInput} onChange={(e)=>{this.setState({msgInput:e.target.value})}}/>
                    <input type="button" className='sendBtn' value={'发 送'} onClick={this.send}/>
                </div>
            </div>
        )
    }
    
    send(){
        let msg=this.state.msgInput;
        if (msg===''){
            this.setState({isShow: true})
            window.setTimeout(()=>{this.setState({isShow: false})},3000)
        }else{
            let oldlist = this.state.list;
            oldlist.push(msg);
            this.setState({
                list: oldlist
            });
            this.setState({
                msgInput: ''
            })
        }
    }
    componentDidMount(){
    }
}
