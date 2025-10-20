import axios from "axios";
const baseURL = "https://fullstack-open-yosb.onrender.com/api/persons";

const getAll = () => {
  axios
    .get(baseURL)
    .then((r) => {
      console.log(r.data);
    })
    .catch(console.log("oopsie"));
  return axios.get(baseURL).then((r) => {
    console.log("this");
    r.data;
  });
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
