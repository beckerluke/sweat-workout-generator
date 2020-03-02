import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './ExerciseCard.css'

class ExerciseCard extends Component {
    state = {

    };

    render() {
        const exerciseCard = this.props.exercise;
    
        return (
            <section className="generated-workout">
                <div className="exercise-card">
                    <h5>{exerciseCard.exercise_name}</h5>
                <p id="exercise-card-description">
                    {exerciseCard.description}
                </p>
                    
                </div>
            </section>
        )
    }
}

export default connect(mapStoreToProps)(ExerciseCard);