import axios from 'axios';

const IP = 'http://ec2-35-175-244-140.compute-1.amazonaws.com/categories';

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios.get(`${IP}`),
  };
};

export const getCategoryById = id => {
  return {
    type: 'GET_CATEGORY',
    payload: axios.get(`${IP}/` + id),
  };
};

export const addCategory = dataCategory => {
  return {
    type: 'ADD_CATEGORY',
    payload: axios.post(`${IP}`, dataCategory),
  };
};

export const updateCategory = (id, dataCategory) => {
  return {
    type: 'UPDATE_CATEGORY',
    payload: axios.patch(`${IP}/` + id, dataCategory),
  };
};

export const deleteCategory = id => {
  return {
    type: 'DELETE_CATEGORY',
    payload: axios.delete(`${IP}/` + id),
  };
};
