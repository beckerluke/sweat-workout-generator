import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ExerciseCard from './ExerciseCard/ExerciseCard';
import RenderYouTubeVideo from './SearchYouTube/RenderYouTubeVideo';

class LandingPage extends Component {
    state = {
        fullBodyWorkoutBtnClicked: false,
        back_exercises: false,
        chest_exercises: false,
    };

    fullBodyWorkoutClick = event =>  {
        this.props.dispatch({type: 'FETCH_TOTAL_BODY_WORKOUT'});
        this.setState({
            fullBodyWorkoutBtnClicked: !this.state.fullBodyWorkoutBtnClicked,
        });
    }

    handleBodyPartClick = key => event => {
        this.props.dispatch({type: 'FETCH_BODY_PART_WORKOUT', payload: key});
        this.setState({
            [key]: !this.state.key,
        }, () => {console.log(this.state)});
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
                {/* probably should make into a component */}
                <button 
                    className="btn btn-default" 
                    onClick={this.fullBodyWorkoutClick}>Generate Full Body Workout
                </button>
                <button 
                    className="btn btn-default"
                    onClick={this.handleBodyPartClick('back')}>Generate Back Workout
                </button>
                <button 
                    className="btn btn-default"
                    onClick={this.handleBodyPartClick('chest')}>Generate Chest Workout
                </button>
                <button 
                    className="btn btn-default"
                    onClick={this.handleBodyPartClick('shoulders')}>Generate Shoulder Workout
                </button>
                <button 
                    className="btn btn-default"
                    onClick={this.handleBodyPartClick('biceps')}>Generate Biceps Workout
                </button>
                <button 
                    className="btn btn-default"
                    onClick={this.handleBodyPartClick('triceps')}>Generate Triceps Workout
                </button>
                <button 
                    className="btn btn-default"
                    onClick={this.handleBodyPartClick('quads')}>Generate Quad Workout
                </button>
                <button 
                    className="btn btn-default"
                    onClick={this.handleBodyPartClick('hamstrings')}>Generate Hamstrings Workout
                </button>
                <button 
                    className="btn btn-default"
                    onClick={this.handleBodyPartClick('core')}>Generate Core Workout
                </button>
                {this.props.store.youtubeVideoReducer.length > 0 ? <RenderYouTubeVideo  /> : console.log('nothing in youtube video store')}
                <div>
                    {exercisesArray}
                </div>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(LandingPage);