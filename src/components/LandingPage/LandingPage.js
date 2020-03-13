import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ExerciseCard from './ExerciseCard/ExerciseCard';

class LandingPage extends Component {
    state = {
        fullBodyWorkoutBtnClicked: false,
    };

    fullBodyWorkoutBtn = event =>  {
        this.props.dispatch({type: 'FETCH_RANDOM_WORKOUT'});
        this.setState({
            fullBodyWorkoutBtnClicked: !this.state.fullBodyWorkoutBtnClicked,
        })
    }
    

    render() {
        let randomExercises = this.props.store.workoutReducer;

        console.log('THE STORE: ', this.props.store.workoutReducer);
        const randomExercisesArray = randomExercises.map((exercise, i) => {
            return (<ExerciseCard key={i} exercise={exercise} />)
        });
    
        return (
            <div>
                <h2>Workout of the Day</h2>
                <button className="btn btn-default" 
                    onClick={this.fullBodyWorkoutBtn}>Generate Full Body Workout
                </button>
                <div>
                    {randomExercisesArray}
                </div>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(LandingPage);