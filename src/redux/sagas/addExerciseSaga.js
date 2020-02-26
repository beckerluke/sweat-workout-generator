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
    yield axios.post('api/add/exercise', action.payload);

  } catch (error) {
    console.log('Adding exercise POST request failed', error);
  }
}

function* addExerciseSaga() {
  yield takeLatest('ADD_EXERCISE', addExercise);
}

export default addExerciseSaga;