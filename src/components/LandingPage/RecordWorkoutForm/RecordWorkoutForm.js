import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import RecordWorkoutFormInputs from './RecordWorkoutFormInputs/RecordWorkoutFormInputs';

class RecordWorkoutForm extends Component {
    state = {
        name: this.props.exerciseName,
        description: this.props.exerciseDescription,
        setIsClicked: false,
    }
    
    render() {

        return (
            <form className="record-workout-form">
                <div className="record-form-header">
                    <h3>{this.state.name}</h3>
                    <p>{this.state.description}</p>
                </div>
                <RecordWorkoutFormInputs />
            </form>
        )
    }
}

export default connect(mapStoreToProps)(RecordWorkoutForm);