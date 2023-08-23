import Axios from "axios-observable";
import { FAKE_PRODUCT_URL } from "../constants/common";


export const axiosObs = Axios.create({
    baseURL: FAKE_PRODUCT_URL,
    timeout: 1000,
  });



console.log(Axios.request());