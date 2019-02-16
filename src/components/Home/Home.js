import React from 'react'
import Slider from '../../common/Slider/Slider'
import GoodsList from  '../../common/GoodsList/GoodsList'
import './home.css'
import meau01 from '../../assets/imgs/submeau01.jpg'
import meau02 from '../../assets/imgs/submeau02.jpg'
import meau03 from '../../assets/imgs/submeau03.jpg'
import meau04 from '../../assets/imgs/submeau04.jpg'
import meau05 from '../../assets/imgs/submeau05.jpg'
import activity01   from "../../assets/images/activity01.jpg"
import new01 from '../../assets/images/newUser01.png'
import new02 from '../../assets/images/newUser02.png'
import new03 from '../../assets/images/newUser03.png'

import {connect} from 'react-redux'
import * as types from '../../store/types'
import asynList from '../../store/actions/asynList';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imgs:[
                'https://img.alicdn.com/tps/i4/TB1tqcNEkvoK1RjSZFNwu3xMVXa.png_q90_.webp',
                'https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg',
                'https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg',
                'https://img.alicdn.com/tfs/TB1S83hEirpK1RjSZFhXXXSdXXa-520-280.png_q90_.webp'
            ],
        }
    }
    render(){
        return(
            <div className="home padding">
                <Slider imgs={this.state.imgs}/>
                <ul className="submeau">
                    <li><span><img src={meau01} alt=""/><em>一元集市</em></span></li>
                    <li><span><img src={meau02} alt=""/><em>赚赚</em></span></li>
                    <li><span><img src={meau03} alt=""/><em>十元五件</em></span></li>
                    <li><span><img src={meau04} alt=""/><em>限时秒杀</em></span></li>
                    <li><span><img src={meau05} alt=""/><em>厂家特卖</em></span></li>
                </ul>
                <div className="activity valign">
                    <img src={activity01} alt=""/>
                </div>
                <div className="newUser">
                    <h3>-&nbsp; 新人专属&nbsp;&nbsp;多重优惠&nbsp;-</h3>
                    <div className="ad">
                        <img src={new01} alt=""/>
                        <img src={new02} alt=""/>
                        <img src={new03} alt=""/>
                    </div>
                </div>
                <GoodsList list={this.props.home_data} dataName={'home'}/>
            </div>
        )
    }
    componentDidMount(){
        this.props.get();
    }
}

const MapStateToProps = state => ({
    home_data: state.home_data
});
const MapDispatchToProps = dispatch => ({
    get: () => dispatch(asynList({
        url: '/data/home.json',
        type: types.UPDATE_HOME
    }))
});


export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Home);