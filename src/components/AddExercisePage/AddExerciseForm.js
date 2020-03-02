import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class addExerciseForm extends Component {
  state = {
    exerciseName: '',
    exerciseDescription: '',
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
      btnClicked: !this.state.btnCLicked,
    });
    // dispatch to workoutSaga to POST to database 
    this.props.dispatch({
      type: 'ADD_EXERCISE',
      payload: {
          exerciseName: this.state.exerciseName,
          exerciseDescription: this.state.exerciseDescription,
        }
    });
    
  };

  render() {
   
    return(

      <section id="add-exercise-section">
        <form id="add-exercise-form" className="exercise-form" onSubmit={this.addExercise}>
          <h4>Add Exercise</h4>
          <label htmlFor="exercise-name-input">Name</label>
          <input type="text" id="exercise-name-input" onChange={this.handleInputChange('exerciseName')} value={this.state.exerciseName}></input>
          <label htmlFor="exercise-description-input">Description</label>
          <input type="text" id="description-input" onChange={this.handleInputChange('exerciseDescription')} value={this.state.exerciseDescription}></input>
          <input type="submit" name="submit" className="submitBtn" value="ADD" disabled={!this.state.exerciseName}/>
        </form>
      </section>
    );
  }
}

export default connect(mapStoreToProps)(addExerciseForm);