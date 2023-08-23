import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import product from "./reducer/Product";

const epicMiddleware = createEpicMiddleware();

const reducer = {
    product: product
}


export default configureStore({
    reducer,
    middleware: [epicMiddleware],
});
