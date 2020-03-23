import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './ExerciseCard.css'

class ExerciseCard extends Component {
    state = {

    }
    
    render() {
        const exerciseCard = this.props.exercise;

        const exerciseName = exerciseCard.name;
        const exerciseDescription = exerciseCard.description;

        return (
            <section className="generated-workout">
                <div className="exercise-card">
                    <header className="exercise-card-header">
                        <h5>{exerciseName}</h5>
                    </header>
                    <p className="exercise-card-description">
                        {exerciseDescription}
                    </p>
                </div>
            </section>
        )
    }
}

export default connect(mapStoreToProps)(ExerciseCard);