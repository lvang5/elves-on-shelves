import { put, takeEvery } from 'redux-saga/effects';

function* getShelf() {
  try {
    //axios request goes here, send response data to redux store
  } catch(error) {
    console.log('getShelf saga error:', error);
  }
}

function* shelfSaga() {
  yield takeEvery('GET_SHELF', getShelf);
}

export default shelfSaga;