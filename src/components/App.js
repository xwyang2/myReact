import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'


import Header from '../common/Header/Header'
import Nav from '../common/Nav/Nav'
import Footer from '../common/Footer/Footer'
import Error from '../common/Error/Error'
import Beauty from './Beauty/Beauty'
import Bus from './Bus/Bus'
import Cart from './Cart/Cart'
import Chart from './Chart/Chart'
import Electric from './Electric/Electric'
import Home from './Home/Home'
import House from './House/House'
import Account from './Account/Account'
import Login from './Login/Login'
import Reg from './Reg/Reg'
import Sport from './Sport/Sport'
import Detail from './Detail/Detail'
import GoChart from '../guard/GoChart'
import GoCart from '../guard/GoCart'

import {connect} from 'react-redux'
import * as types from '../store/types'

 class App extends React.Component{
    componentWillReceiveProps(nextProps){
        // console.log(nextProps.location.pathname)
        let path=nextProps.location.pathname;
        this.watchRouter(path);

    }
    componentDidMount() {
        let path = this.props.location.pathname;
        this.watchRouter(path);

    }
    watchRouter(path){
        let {viewHeader,viewNav,viewFooter}=this.props;
        if (/home|beauty|house|sport|bus|electric/.test(path)) {
            viewHeader(true);
            viewNav(true);
            viewFooter(true);
        }
        if (/cart|account/.test(path)) {
            viewHeader(false);
            viewNav(false);
            viewFooter(true);
         }
        if (/chart|detail|login|reg/.test(path)) {
            viewHeader(false);
            viewNav(false);
            viewFooter(false);
        }
    }
    render(){
        let {bHeader, bNav, bFooter}=this.props;
        return(
            <>
                { bHeader && <Header/>}
                { bNav && <Nav/>}
                <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/beauty' component={Beauty}/>
                <Route path='/house' component={House}/>
                <Route path='/bus' component={Bus}/>
                <Route path='/electric' component={Electric}/>
                <Route path='/sport' component={Sport}/>
                <GoCart path='/cart' component={Cart} />
                <GoChart path='/chart' component={Chart} />
                <Route path='/account' component={Account}/>
                <Route path='/login' component={Login}/>
                <Route path='/reg' component={Reg}/>
                <Route path={'/detail/:id'} component={Detail}/>
                <Redirect exact from="/" to="home"/>
                <Route component={Error}/>
                </Switch>
                { bFooter && <Footer/>}
            </>
        )
    }
}

const MapStateToProps = state => ({
    bHeader: state.bHeader,
    bNav: state.bNav,
    bFooter: state.bFooter,
});
const MapDispatchToProps = dispatch => ({
    viewHeader:(bl) => dispatch({type: types.VIEW_HEADER, payload: bl}),
    viewNav:(bl) => dispatch({type: types.VIEW_NAV, payload: bl}),
    viewFooter:(bl) => dispatch({type: types.VIEW_FOOTER, payload: bl}),
});


export default connect(
    MapStateToProps,
    MapDispatchToProps
)(App);