import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_EXERCISE" action
function* addExercise(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    console.log(action.payload);
    yield axios.post('api/workout/add/exercise', action.payload);

  } catch (error) {
    console.log('Adding exercise POST request failed', error);
  }
}

// FETCH_RANDOM_WORKOUT
function* fetchRandomWorkout() {
  try {
    yield axios.get('api/workout');
  } catch(err) {
    console.log('Error retrieving workout', err);
  }
}

function* workoutSaga() {
  yield takeLatest('ADD_EXERCISE', addExercise);
  yield takeLatest('FETCH_RANDOM_WORKOUT', fetchRandomWorkout);
}

export default workoutSaga;