import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseURL).then((r) => r.data);
};

const create = (obj) => {
  return axios.post(baseURL, obj).then((r) => r.data);
};

const update = (obj, id) => {
  return axios.put(`${baseURL}/${id}`, obj).then((r) => r.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};

export default {
  getAll,
  create,
  update,
  deletePerson,
};
