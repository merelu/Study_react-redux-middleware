import React, { useEffect } from "react";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { getPost, goToHome } from "../modules/repack-thunk-posts";

function PostContainer({ postId }) {
  const { data, loading, error } = useSelector(
    (state) => state.repackThunkPosts.post[postId]
  ) || {
    loading: false,
    data: null,
    error: null,
  }; // 아예 데이터가 존재하지 않을 때가 있으므로 비구조화 할당이 오류나지 않도록;
  const dispatch = useDispatch();

  //useEffect의 반환하는 함수는 cleanup 함수라고 한다.
  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
      <Post post={data} />
    </>
  );
}

export default PostContainer;
