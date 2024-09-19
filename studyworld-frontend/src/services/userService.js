import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/users';

export const registerUser = async (user) => {
  return axios.post(`${API_BASE_URL}/register`, user);
};

export const getUserById = async (id) => {
  return axios.get(`${API_BASE_URL}/id/${id}`);
};

export const getUserByUsername = async (username) => {
  return axios.get(`${API_BASE_URL}/username/${username}`);
};

export const getUserByEmail = async (email) => {
  return axios.get(`${API_BASE_URL}/email/${email}`);
};
