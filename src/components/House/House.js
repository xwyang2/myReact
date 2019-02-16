import React from 'react'
import GoodsList from '../../common/GoodsList/GoodsList'

import {connect} from 'react-redux'
import * as types from '../../store/types'
import asynList from '../../store/actions/asynList';

class House extends React.Component {
    render() {
        return (
            <div className="house padding">
                <GoodsList list={this.props.house_data} dataName={'house'}/>
            </div>
        )
    }

    componentDidMount() {
        this.props.get();
    }
}

const MapStateToProps = state => ({
    house_data: state.house_data
});
const MapDispatchToProps = dispatch => ({
    get: () => dispatch(asynList({
        url: '/data/elec.json',
        type: types.UPDATE_HOUSE
    }))
});


export default connect(
    MapStateToProps,
    MapDispatchToProps
)(House);