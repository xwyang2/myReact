import React from 'react'
import GoodsList from '../../common/GoodsList/GoodsList'

import {connect} from 'react-redux'
import * as types from '../../store/types'
import asynList from '../../store/actions/asynList';

class Beauty extends React.Component {
    render() {
        return (
            <div className="beauty padding">
                <GoodsList list={this.props.beauty_data} dataName={'beauty'}/>
            </div>
        )
    }

    componentDidMount() {
        this.props.get();
    }
}

const MapStateToProps = state => ({
    beauty_data:state.beauty_data
});
const MapDispatchToProps = dispatch => ({
    get: () => dispatch(asynList({
        url: '/data/live.json',
        type: types.UPDATE_BEAUTY
    }))
});


export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Beauty);