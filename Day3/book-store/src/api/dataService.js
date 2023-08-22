import Axios from "axios-observable";


const axiosObservable = Axios.create({
    baseURL: 'https://fakestoreapi.com/',
    timeout: 1000,
  });

console.log(Axios.request());