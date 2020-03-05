import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AddExerciseForm from './AddExerciseForm';

// an array holding all of the types of body parts
const BODY_PART_ARRAY = [
  {
    bodyPart: 'back_exercises',
    heading: 'Add Back Exercise'
  },
  {
    bodyPart: 'chest_exercises',
    heading: 'Add Chest Exercise'
  },
  {
    bodyPart: 'shoulder_exercises',
    heading: 'Add Shoulder Exercise'
  },
  {
    bodyPart: 'quad_exercises',
    heading: 'Add Quad Exercise'
  },
  {
    bodyPart: 'hamstring_exercises',
    heading: 'Add Hamstring Exercise'
  },
  {
    bodyPart: 'core_exercises',
    heading: 'Add Core Exercise'
  },
  {
    bodyPart: 'triceps_exercises',
    heading: 'Add Triceps Exercise'
  },
  {
    bodyPart: 'biceps_exercises',
    heading: 'Add Biceps Exercise'
  },
];

class addExercisePage extends Component {
  
  render() {
   
    const addExerciseForms = BODY_PART_ARRAY.map((bodyPart, i) => {
      return <AddExerciseForm key={i} bodyPart={bodyPart} />
    })
    return(
      <div>
        <h2>ADD AN EXERCISE TO YOUR WORKOUT LIBRARY</h2>
        <section id="add-exercise-section">
          {addExerciseForms}
        </section>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(addExercisePage);
