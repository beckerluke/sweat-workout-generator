import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './ExerciseCard.css';

class SearchYouTubeButton extends Component {
    
    
    state = {};

    pingYouTube = event => {
        // prop is passed from ExerciseCard component
        const exerciseName = this.props.exerciseName;
        this.props.dispatch({type: 'FETCH_YOUTUBE_VIDEO', payload: exerciseName});
    }
    render() {
        return (
            <div className="youtube-video-section">
                <button onClick={this.pingYouTube}>Load Example Video</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(SearchYouTubeButton);