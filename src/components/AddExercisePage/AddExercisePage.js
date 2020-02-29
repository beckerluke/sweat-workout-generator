import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class addExercise extends Component {
  state = {
    exercise: '',
  } 
  
  handleInputChange = key => event => {
    this.setState({
      ...this.state,
      [key]: event.target.value,
    },
    () => console.log(this.state)
    );
  };

  addExercise = event => {
    this.props.dispatch({
      type: 'ADD_EXERCISE',
      payload: {exercise: this.state.exercise}
    });
    
  };

  render() {
   
    return(
      <div>
        <div>
          <label htmlFor="exercise-input">Add Exercise</label>
          <input type="text" id="exercise-input" onChange={this.handleInputChange('exercise')}></input>
          <button onClick={this.addExercise} disabled={!this.state.exercise}>ADD</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(addExercise);
