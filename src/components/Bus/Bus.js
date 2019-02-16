import React from 'react'
import GoodsList from '../../common/GoodsList/GoodsList'

import {connect} from 'react-redux'
import * as types from '../../store/types'
import asynList from '../../store/actions/asynList';

class Bus extends React.Component {
    render() {
        return (
            <div className="bus padding">
                <GoodsList list={this.props.bus_data} dataName={'bus'}/>
            </div>
        )
    }

    componentDidMount() {
        this.props.get();
    }
}


const MapStateToProps = state => ({
    bus_data: state.bus_data
});
const MapDispatchToProps = dispatch => ({
    get: () => dispatch(asynList({
        url: '/data/elec.json',
        type: types.UPDATE_BUS
    }))
});


export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Bus);