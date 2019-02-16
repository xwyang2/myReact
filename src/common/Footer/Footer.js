import React from 'react'
import {NavLink} from 'react-router-dom'
import './footer.css'
import home01 from '../../assets/imgs/footer_home01.jpg'
import chart01 from '../../assets/imgs/footer_chart01.jpg'
import cart01 from '../../assets/imgs/footer_cart01.jpg'
import user01 from '../../assets/imgs/footer_user01.jpg'
export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <ul>
                    <li><NavLink activeClassName="actives" to='/home'><span><img src={home01} alt=''/></span><em>首页</em></NavLink></li>
                    <li><NavLink activeClassName="actives" to="/chart"><span><img src={chart01} alt='' /></span><em>聊天</em></NavLink></li>
                    <li><NavLink activeClassName="actives" to="/cart"><span><img src={cart01} alt='' /></span><em>购物车</em></NavLink></li>
                    <li><NavLink activeClassName="actives" to="/account"><span><img src={user01} alt='' /></span><em>我的</em></NavLink></li>
                </ul>
            </div>
        )
    }
}
