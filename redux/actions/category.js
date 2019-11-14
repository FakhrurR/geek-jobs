import axios from 'axios';

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios.get('http://localhost:2000/categories'),
  };
};

export const getCategoryById = id => {
  return {
    type: 'GET_CATEGORY',
    payload: axios.get('http://localhost:2000/categories/' + id),
  };
};

export const addCategory = dataCategory => {
  return {
    type: 'ADD_CATEGORY',
    payload: axios.post('http://localhost:2000/categories', dataCategory),
  };
};

export const updateCategory = (id, dataCategory) => {
  return {
    type: 'UPDATE_CATEGORY',
    payload: axios.patch('http://localhost:2000/categories/' + id, dataCategory),
  };
};

export const deleteCategory = id => {
  return {
    type: 'DELETE_CATEGORY',
    payload: axios.delete('http://localhost:2000/categories/' + id),
  };
};
