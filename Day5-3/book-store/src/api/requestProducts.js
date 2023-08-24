import axios from "axios";
import { FAKE_PRODUCT_URL } from "../constants/common";

export const requestProducts = axios.create(
    {baseURL: FAKE_PRODUCT_URL}
)

