import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_EXERCISE" action
function* addExercise(action) {
  try {
    console.log(action.payload);
    yield axios.post(`api/workout/add/exercise`, action.payload);
    // yield put({type: 'FETCH_RANDOM_WORKOUT'});
  } catch (error) {
    console.log('Adding exercise POST request failed', error);
  }
}

// FETCH_RANDOM_WORKOUT
function* fetchRandomWorkout() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    // 5 randomly selected exercises from database
    const response = yield axios.get(`api/workout/total/body`, config);
    console.log(response.data);
    yield put({type:'SET_WORKOUT', payload: response.data});
  } catch(err) {
    console.log('Error retrieving workout', err);
  }
}

// FETCH_BACK_WORKOUT
function* fetchBackWorkout() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    // 5 randomly selected back exercises from database
    const response = yield axios.get(`/api/back_exercises`, config);
    console.log(response.data);
    yield put({type:'SET_WORKOUT', payload: response.data});
  } catch(err) {
    console.log('Error retrieving workout', err);
  }
}

function* workoutSaga() {
  yield takeLatest('ADD_EXERCISE', addExercise);
  yield takeLatest('FETCH_RANDOM_WORKOUT', fetchRandomWorkout);
  yield takeLatest('FETCH_BACK_WORKOUT', fetchBackWorkout);
}

export default workoutSaga;