import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import YouTube from 'react-youtube';

class RenderYouTubeVideo extends Component {
    
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    
    render() {
        const videoId = this.props.store.youtubeVideoReducer;
        const opts = {
          height: '390',
          width: '640',
          playerVars: {
            autoplay: 1,
          },
        };
     
        return <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />;
    }
}

export default connect(mapStoreToProps)(RenderYouTubeVideo);