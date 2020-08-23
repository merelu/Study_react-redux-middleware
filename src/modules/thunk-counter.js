//액션 타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//액션 생성함수
export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});

//getState를 쓰지 않는다면 굳이 파라미터로 받아올 필요 없다.
export const increaseAsync = () => (dispatch) => {
  //setTimeout의 인자로준 함수가 제일 마지막인자인 시간 후에 실행된다.
  setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => (dispatch) => {
  //setTimeout의 인자로준 함수가 제일 마지막인자인 시간 후에 실행된다.
  setTimeout(() => dispatch(decrease()), 1000);
};

//saga generator함수

const initialState = 0;

export default function thunkCounter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
