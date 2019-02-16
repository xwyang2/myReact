import {Route,Redirect} from 'react-router-dom'
import React from 'react'
import {connect} from 'react-redux'


class GoCart extends React.Component{
    render(){
        let {component:Component}=this.props;
        return <Route  render={()=>
            this.props.user.islogged ?
            <Component/> :
            <Redirect to="/login"/>
        }/>
    }
}
const MapStateToProps = state => ({
    user:state.user
});
const MapDispatchToProps = dispatch => ({

});


export default connect(
    MapStateToProps,
    MapDispatchToProps
)(GoCart);