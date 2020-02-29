import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class ExerciseCard extends Component {
    state = {

    };

    render() {
        const exerciseCard = this.props.exercise;
    
        return (
            <div>
                {exerciseCard.exercise_name}
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ExerciseCard);