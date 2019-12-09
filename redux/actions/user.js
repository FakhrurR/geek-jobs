import axios from 'axios';

const IP = 'http://ec2-35-175-244-140.compute-1.amazonaws.com/user';

export const getUser = () => {
  return {
    type: 'GET_USER',
    payload: axios.get(`${IP}`),
  };
};

export const addUser = account => {
  return {
    type: 'ADD_USER',
    payload: axios.post(`${IP}/signup`, account),
  };
};

export const updateUser = (id, dataUser) => {
  return {
    type: 'UPDATE_USER',
    payload: axios.patch(`${IP}` + id, dataUser),
  };
};

export const deleteUser = id => {
  return {
    type: 'DELETE_USER',
    payload: axios.delete(`${IP}` + id),
  };
};

export const loginUser = (email, password) => {
  return {
    type: 'LOGIN_USER',
    payload: axios.post(`${IP}/login`, email, password),
  };
};
