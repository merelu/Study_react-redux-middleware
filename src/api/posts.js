import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("/posts");
  return response.data; //posts 배열
};

export const getPostById = async (id) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data; //id로 찾아서 반환
};
