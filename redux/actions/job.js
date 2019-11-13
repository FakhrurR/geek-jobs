import axios from 'axios';

// const IP = 'localhost:2000';
// 192.168.0.139
const IP = 'http://localhost:2000/job';

export const getJob = () => {
  return {
    type: 'GET_JOB',
    payload: axios.get(`${IP}`),
  };
};

export const getJobId = id => {
  return {
    type: 'GET_JOB',
    payload: axios.get(`${IP}/` + id),
  };
};

export const getJobSearch = (name, company) => {
  return {
    type: 'GET_JOB',
    payload: axios.get(`${IP}?name=${name}``&company=${company}`),
  };
};

export const getJobOrderBy = query => {
  return {
    type: 'GET_JOB',
    payload: axios.get(`${IP}?orderby=` + query),
  };
};

export const addJob = dataJob => {
  return {
    type: 'ADD_JOB',
    payload: axios.post(`${IP}`, dataJob),
  };
};

export const updateJob = (id, data) => {
  return {
    type: 'UPDATE_JOB',
    payload: axios.patch(`${IP}` + id, data),
  };
};

export const deleteJob = id => {
  return {
    type: 'DELETE_JOB',
    payload: axios.delete(`${IP}/` + id),
  };
};
