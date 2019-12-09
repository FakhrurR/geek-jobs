import axios from 'axios';

const IP = 'http://ec2-35-175-244-140.compute-1.amazonaws.com/company';

export const getCompany = () => {
  return {
    type: 'GET_COMPANY',
    payload: axios.get(`${IP}`),
  };
};

export const getCompanyById = id => {
  return {
    type: 'GET_COMPANY',
    payload: axios.get(`${IP}` + id),
  };
};

export const addCompany = dataCompany => {
  return {
    type: 'ADD_COMPANY',
    payload: axios.post(`${IP}`, dataCompany),
  };
};

export const updateCompany = (id, dataCompany) => {
  return {
    type: 'UPDATE_COMPANY',
    payload: axios.patch(`${IP}/` + id, dataCompany),
  };
};

export const deleteCompany = id => {
  return {
    type: 'DELETE_COMPANY',
    payload: axios.delete(`${IP}/` + id),
  };
};
