import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './ExerciseCard.css';
import RecordWorkoutForm from '../RecordWorkoutForm/RecordWorkoutForm';

class ExerciseCard extends Component {
    state = {
        item: {
            name: this.props.exercise.name,
            description: this.props.description,
        },
        showForm: false
    }
    
    s

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
                    <button onClick={() => {this.setState({showForm: !this.state.showForm})}}>Post Your Workout</button>
                    
                    {this.state.showForm ?  
                        <RecordWorkoutForm 
                            exerciseName={exerciseName}
                            exerciseDescription={exerciseDescription} 
                        /> : false}
                </div>
            </section>
        )
    }
}

export default connect(mapStoreToProps)(ExerciseCard);