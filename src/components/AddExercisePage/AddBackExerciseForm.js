import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class addBackExerciseForm extends Component {
  state = {
    exerciseName: '',
    exerciseDescription: '',
    exerciseBodyPart: "back_exercises",
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
    event.preventDefault();
    // reset state when form is submitted
    this.setState({
      exerciseName: '',
      exerciseDescription: '',
    });
    // dispatch to workoutSaga to POST to database 
    this.props.dispatch({
      type: 'ADD_EXERCISE',
      payload: {
          exerciseName: this.state.exerciseName,
          exerciseDescription: this.state.exerciseDescription,
          exerciseBodyPart: this.state.exerciseBodyPart,
        }
    });
    
  };

  render() {
   
    return(

      <section id="add-back-exercise-section">
        <form className="add-exercise-form" onSubmit={this.addExercise}>
          <h4>Add Back Exercise</h4>
          <label htmlFor="exercise-name-input">Name</label>
          <input type="text" className="exercise-name-input" onChange={this.handleInputChange('exerciseName')} value={this.state.exerciseName}></input>
          <label htmlFor="exercise-description-input">Description</label>
          <input type="text" className="description-input" onChange={this.handleInputChange('exerciseDescription')} value={this.state.exerciseDescription}></input>
          <input type="submit" name="submit" className="submitBtn" value="ADD" disabled={!this.state.exerciseName}/>
        </form>
      </section>
    );
  }
}

export default connect(mapStoreToProps)(addBackExerciseForm);