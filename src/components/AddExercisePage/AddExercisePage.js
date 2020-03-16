import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import AddExerciseForm from './AddExerciseForm';

// an array holding all of the types of body parts
// const BODY_PART_ARRAY = [
//   {
//     bodyPart: 'back_exercises',
//     heading: 'Add Back Exercise'
//   },
//   {
//     bodyPart: 'chest_exercises',
//     heading: 'Add Chest Exercise'
//   },
//   {
//     bodyPart: 'shoulder_exercises',
//     heading: 'Add Shoulder Exercise'
//   },
//   {
//     bodyPart: 'quad_exercises',
//     heading: 'Add Quad Exercise'
//   },
//   {
//     bodyPart: 'hamstring_exercises',
//     heading: 'Add Hamstring Exercise'
//   },
//   {
//     bodyPart: 'core_exercises',
//     heading: 'Add Core Exercise'
//   },
//   {
//     bodyPart: 'triceps_exercises',
//     heading: 'Add Triceps Exercise'
//   },
//   {
//     bodyPart: 'biceps_exercises',
//     heading: 'Add Biceps Exercise'
//   },
// ];

// class addExercisePage extends Component {
  
//   render() {
   
//     const addExerciseForms = BODY_PART_ARRAY.map((bodyPart, i) => {
//       return <AddExerciseForm key={i} bodyPart={bodyPart} />
//     })
//     return(
//       <div>
//         <h2>ADD AN EXERCISE TO YOUR WORKOUT LIBRARY</h2>
//         <section id="add-exercise-section">
//           {addExerciseForms}
//         </section>
//       </div>
//     );
//   }
// }

// export default connect(mapStoreToProps)(addExercisePage);

class addExercisePage extends Component {
     
  state = {
    exerciseName: '',
    exerciseDescription: '',
    exerciseType: ''
  }

//   this.setState({
//     exerciseBodyPart,
//     heading
//   });



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
    ...this.state.exerciseType,
    exerciseName: '',
    exerciseDescription: '',
  });
  // dispatch to workoutSaga to POST to database 
  this.props.dispatch({
    type: 'ADD_EXERCISE',
    payload: {
        exerciseName: this.state.exerciseName,
        exerciseDescription: this.state.exerciseDescription,
        exerciseType: this.state.exerciseType,
      }
  });
};

render() {
 
  return(
      
    <div>
        <h2>ADD AN EXERCISE TO YOUR WORKOUT LIBRARY</h2>
        <section id="add-exercise-section">
        <form className="add-exercise-form" onSubmit={this.addExercise}>
          <h4>{this.state.heading}</h4>
          <label htmlFor="exercise-name-input">Name</label>
          <input type="text" className="exercise-name-input" onChange={this.handleInputChange('exerciseName')} value={this.state.exerciseName}></input>
          <label htmlFor="exercise-description-input">Description</label>
          <input type="text" className="description-input" onChange={this.handleInputChange('exerciseDescription')} value={this.state.exerciseDescription}></input>
          <label htmlFor="exercise-type-input">Type</label>
            <select 
              className="exercise-type-input"
              onChange={this.handleInputChange('exerciseType')}
            >
              <option value="back">Back</option>
              <option value="chest">Chest</option>
              <option value="shoulders">Shoulders</option>
              <option value="quads">Quads</option>
              <option value="hamstrings">Hamstrings</option>
              <option value="core">Core</option>
              <option value="triceps">Triceps</option>
              <option value="biceps">Biceps</option>
              <option value="hiit">HIIT</option>
            </select>
          <input type="submit" name="submit" className="submitBtn" value="ADD" disabled={!this.state.exerciseType}/>
      </form>
        </section>
      </div>
  );
}
}

export default connect(mapStoreToProps)(addExercisePage);