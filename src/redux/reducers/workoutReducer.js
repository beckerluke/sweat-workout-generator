const workoutReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_RANDOM_WORKOUT':
        return action.payload;
      default:
        return state;
    }
  };

  export default workoutReducer;