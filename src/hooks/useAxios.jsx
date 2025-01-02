import axios from "axios";
const instance = axios.create({
  baseURL: "https://passthefood-server.onrender.com/api/v1",
});

const useAxios = () => {
  return instance;
};

export default useAxios;
