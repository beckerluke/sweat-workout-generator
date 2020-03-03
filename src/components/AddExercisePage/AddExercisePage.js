import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AddBackExerciseForm from './AddBackExerciseForm';
import AddChestExerciseForm from './AddChestExerciseForm';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class addExercisePage extends Component {

  render() {
   
    return(

      <section id="add-exercise-section">
        <AddBackExerciseForm />
        <AddChestExerciseForm />
      </section>
    );
  }
}

export default connect(mapStoreToProps)(addExercisePage);
