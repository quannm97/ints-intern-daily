import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./epic";
import productsReducer from "./reducer/productsReducer";
const epicMiddleware = createEpicMiddleware();

const reducer = {
    products: productsReducer
}



export default configureStore({
    reducer,
    middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);
