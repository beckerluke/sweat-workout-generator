import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class LandingPage extends Component {
    state = {
    };
    
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_RANDOM_WORKOUT'});
    }

    render() {
        return (
            <div>
                <h2>Workout of the Day</h2>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(LandingPage);