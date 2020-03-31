import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './ExerciseCard.css';
import axios from 'axios';

class SearchYouTubeButton extends Component {
    
    
    state = {};

    pingYouTube = event => {
        // prop is passed from ExerciseCard component
        const exerciseName = this.props.exerciseName.split(' ');
        console.log(exerciseName);
        /* if the name of the exercise is two or more words, place '%20'
        * between words so that youTube API HTTP request works
        */
        let exerciseNameForQuery = ``;
        if (exerciseName.length > 1) {
            exerciseNameForQuery = (exerciseName.join('%20'));
        } else {
            exerciseNameForQuery = exerciseName[0];
        }
        console.log(exerciseNameForQuery);
        // ping YouTube data API to search for exercise videos
        let googleQuery = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${exerciseNameForQuery}%20exercise&type=video&videoDefinition=high&key=${process.env.YOUTUBE_API}`
        
        axios.get(googleQuery).then(result => {
            console.log('YouTube search results', result.data.items)
        }).catch(err => {
            console.log('Error getting YouTube Data', err);
        })
    }
    render() {
        console.log('env:', process.env.YOUTUBE_API);
        return (
            <button onClick={this.pingYouTube}>Load Example Video</button>
        )
    }
}

export default connect(mapStoreToProps)(SearchYouTubeButton);