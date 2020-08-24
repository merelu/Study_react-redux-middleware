import * as postsAPI from "../api/posts"; //api/posts안의 함수 모두 불러오기
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseThunkById,
} from "../lib/asyncUtils";

/* 액션 타입 */

// 포스트 여러개 조회하기
const REQUEST_POSTS = "REQUEST_POSTS"; //요청 시작
const REQUEST_POSTS_SUCCESS = "REQUEST_POSTS_SUCCESS"; //요청 성공
const REQUEST_POSTS_ERROR = "REQUEST_POSTS_ERROR"; //요청 실패

//포스트 하나만 조회하기
const REQUEST_POST = "REQUEST_POST";
const REQUEST_POST_SUCCESS = "REQUEST_POST_SUCCESS";
const REQUEST_POST_ERROR = "REQUEST_POST_ERROR";

//아주 쉽게 thunk함수를 만들 수 있게 되었습니다.
export const getPosts = createPromiseThunk(REQUEST_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunkById(
  REQUEST_POST,
  postsAPI.getPostById
);

//initialstate쪽도 반복되는 코드를 initial()함수를 사용해서 리팩토링 했다.
const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

//리듀서 정의
export default function repackThunkPosts(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
    case REQUEST_POSTS_SUCCESS:
    case REQUEST_POSTS_ERROR:
      return handleAsyncActions(REQUEST_POSTS, "posts", true)(state, action);
    case REQUEST_POST:
    case REQUEST_POST_SUCCESS:
    case REQUEST_POST_ERROR:
      return handleAsyncActionsById(REQUEST_POST, "post", true)(state, action);
    default:
      return state;
  }
}

export const goToHome = () => (dispatch, getState, { history }) => {
  history.push("/");
};
