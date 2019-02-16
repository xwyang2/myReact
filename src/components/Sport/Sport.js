import React from 'react'
import GoodsList from '../../common/GoodsList/GoodsList'

import {connect} from 'react-redux'
import * as types from '../../store/types'
import asynList from '../../store/actions/asynList';

class Sport extends React.Component {
    render() {
        return (
            <div className="sport padding">
                <GoodsList list={this.props.sport_data} dataName={'sport'}/>
            </div>
        )
    }

    componentDidMount() {
        this.props.get();
    }
}

const MapStateToProps = state => ({
    sport_data: state.sport_data
});
const MapDispatchToProps = dispatch => ({
    get: () => dispatch(asynList({
        url: '/data/live.json',
        type: types.UPDATE_SPORT
    }))
});


export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Sport);