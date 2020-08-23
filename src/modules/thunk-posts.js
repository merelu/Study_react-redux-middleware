import * as postsAPI from "../api/posts"; //api/posts안의 함수 모두 불러오기

/* 액션 타입 */

// 포스트 여러개 조회하기
const REQUEST_POSTS = "REQUEST_POSTS"; //요청 시작
const REQUEST_POSTS_SUCCESS = "REQUEST_POSTS_SUCCESS"; //요청 성공
const REQUEST_POSTS_ERROR = "REQUEST_POSTS_ERROR"; //요청 실패

//포스트 하나만 조회하기
const REQUEST_POST = "REQUEST_POST";
const REQUEST_POST_SUCCESS = "REQUEST_POST_SUCCESS";
const REQUEST_POST_ERROR = "REQUEST_POST_ERROR";

// thunk를 사용 할 때, 꼭 모든 액션들에 대하여 액션 생성함수를 만들 필요는 없다.
//그냥 thunk 함수에서 바로 액션 객체를 만들어주어도 괜찮습니다.

export const getPosts = () => async (dispatch) => {
  dispatch({ type: REQUEST_POSTS }); //요청이 시작됨
  try {
    const posts = await postsAPI.getPosts(); //API 호출
    dispatch({ type: REQUEST_POSTS_SUCCESS, posts }); //성공
  } catch (e) {
    dispatch({ type: REQUEST_POSTS_ERROR, error: e });
  }
};

//thunk 함수에서도 파라미터를 받아와서 사용 할 수 있다.
export const getPost = (id) => async (dispatch) => {
  dispatch({ type: REQUEST_POST }); //요청이 시작됨
  try {
    const post = await postsAPI.getPostById(id); //API 호출
    dispatch({ type: REQUEST_POST_SUCCESS, post }); //성공
  } catch (e) {
    dispatch({ type: REQUEST_POST_ERROR, error: e }); //실패
  }
};

//초기상태 정의 리듀서에서 관리할 상태
const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
  post: {
    loading: false,
    data: null,
    error: null,
  },
};

//리듀서 정의
export default function thunkPosts(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case REQUEST_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          loading: false,
          data: action.posts,
          error: null,
        },
      };
    case REQUEST_POSTS_ERROR:
      return {
        ...state,
        posts: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    case REQUEST_POST:
      return {
        ...state,
        post: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case REQUEST_POST_SUCCESS:
      return {
        ...state,
        post: {
          loading: false,
          data: action.post,
          error: null,
        },
      };
    case REQUEST_POST_ERROR:
      return {
        ...state,
        post: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
