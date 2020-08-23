import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

//액션 타입
const INCREASE = "saga/INCREASE";
const DECREASE = "saga/DECREASE";
const INCREASE_ASYNC = "saga/INCREASE_ASYNC";
const DECREASE_ASYNC = "saga/DECREASE_ASYNC";

//액션 생성 함수
export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});
export const increaseAsync = () => ({
  type: INCREASE_ASYNC,
});
export const decreaseAsync = () => ({
  type: DECREASE_ASYNC,
});

//redux-saga에서는 제너레이터함수를 "사가"라고 부른다.
function* increaseSaga() {
  yield delay(1000); //3초를 기다립니다.
  yield put(increase()); //put은 특정 액션을 디스패치 해준다.
}
function* decreaseSaga() {
  yield delay(1000); //3초를 기다립니다.
  yield put(decrease()); //put은 특정 액션을 디스패치 해줍니다.
}

const initialState = 0;

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga); //모든 INCREASE_ASYNC액션을 처리
  yield takeLatest(DECREASE_ASYNC, decreaseSaga); //가장 마지막으로 디스패치된 DECREASE_ASYNC액션만 처리
}
export default function sagaCounter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
