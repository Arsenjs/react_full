import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getUsers = async () => {
  return await api.get("/users");
};

export const getSingleUser = async (id) => {
  return await api.get(`/users/${id}`);
};
