import axios from "axios";
const baseURL = "https://fullstack-open-yosb.onrender.com/api/persons";

const getAll = () => {
  return axios
    .get(baseURL)
    .then((r) => {
      console.log("this");
      return r.data;
    })
    .catch("Couldn't getAll");
};

const create = (obj) => {
  return axios
    .post(baseURL, obj)
    .then((r) => r.data)
    .catch("Couldn't create");
};

const update = (obj, id) => {
  return axios
    .put(`${baseURL}/${id}`, obj)
    .then((r) => r.data)
    .catch("Couldn't update");
};

const deletePerson = (id) => {
  return axios.delete(`${baseURL}/${id}`).catch("Couldn't delete");
};

export default {
  getAll,
  create,
  update,
  deletePerson,
};
