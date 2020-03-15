import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './ExerciseCard.css'

class ExerciseCard extends Component {
    state = {

    }
    
    render() {
        const exerciseCard = this.props.exercise;
        // convert into array to extract values
        const exerciseArray = Object.values(exerciseCard);

        const exerciseName = exerciseArray[exerciseArray.length - 2];
        const exerciseDescription = exerciseArray[exerciseArray.length - 1];

        return (
            <section className="generated-workout">
                <div className="exercise-card">
                    <header>
                        <h5>{exerciseName}</h5>
                    </header>
                    
                <p id="exercise-card-description">
                    {exerciseDescription}
                </p>
                    
                </div>
            </section>
        )
    }
}

export default connect(mapStoreToProps)(ExerciseCard);