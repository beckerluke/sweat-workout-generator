import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AddExerciseForm from './AddExerciseForm';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class addExercisePage extends Component {
  state = {
    exercise: '',
    description: '',
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

    // this.setState({
    //   ...this.state,
    //   btnClicked: !this.state.btnCLicked,
    // })
    this.props.dispatch({
      type: 'ADD_EXERCISE',
      payload: {exercise: this.state.exercise}
    });
    
  };

  render() {
   
    return(

      <section id="add-exercise-section">
        <AddExerciseForm />
      </section>
    );
  }
}

export default connect(mapStoreToProps)(addExercisePage);
