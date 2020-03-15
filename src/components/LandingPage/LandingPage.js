import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ExerciseCard from './ExerciseCard/ExerciseCard';

class LandingPage extends Component {
    state = {
        fullBodyWorkoutBtnClicked: false,
        backWorkoutClicked: false,
    };

    fullBodyWorkoutClick = event =>  {
        this.props.dispatch({type: 'FETCH_RANDOM_WORKOUT'});
        this.setState({
            fullBodyWorkoutBtnClicked: !this.state.fullBodyWorkoutBtnClicked,
        })
    }

    backWorkoutClick = event =>  {
        
        this.props.dispatch({type: 'FETCH_BACK_WORKOUT'});
        this.setState({
            backWorkoutClicked: !this.state.backWorkoutClicked,
        })
    }
    

    render() {
        let randomExercises = this.props.store.workoutReducer;

        console.log('THE STORE: ', this.props.store.workoutReducer);
        const exercisesArray = randomExercises.map((exercise, i) => {
            return (<ExerciseCard key={i} exercise={exercise} />)
        });
    
        return (
            <div>
                <h2>Workout of the Day</h2>
                <button 
                    className="btn btn-default" 
                    onClick={this.fullBodyWorkoutClick}>Generate Full Body Workout
                </button>
                <button 
                    className="btn btn-default"
                    onClick={this.backWorkoutClick}>Generate Back Workout
                </button>
                <div>
                    {exercisesArray}
                </div>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(LandingPage);