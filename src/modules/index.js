import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import thunkCounter from "./thunk-counter";
import repackThunkPosts from "./repack-thunk-posts";
import sagaCounter, { counterSaga } from "./saga-counter";
const rootReducer = combineReducers({ thunkCounter, repackThunkPosts });
export function* rootSaga() {
  yield all([counterSaga()]); //all은 배열 안의 여러 사가를 동시에 실행시켜준다.
}
export default rootReducer;
