const youtubeVideoReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_YOUTUBE_VIDEO':
        return action.payload;
      default:
        return state;
    }
  };

  export default youtubeVideoReducer;