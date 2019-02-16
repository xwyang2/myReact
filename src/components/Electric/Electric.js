import React from 'react'
import GoodsList from '../../common/GoodsList/GoodsList'

import {connect} from 'react-redux'
import * as types from '../../store/types'
import asynList from '../../store/actions/asynList';

class Electric extends React.Component {
    render() {
        return (
            <div className="electric padding">
                <GoodsList list={this.props.electric_data} dataName={'electric'}/>
            </div>
        )
    }

    componentDidMount() {
        this.props.get();
    }
}

const MapStateToProps = state => ({
    electric_data: state.electric_data
});
const MapDispatchToProps = dispatch => ({
    get: () => dispatch(asynList({
        url: '/data/live.json',
        type: types.UPDATE_ELECTRIC
    }))
});


export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Electric);