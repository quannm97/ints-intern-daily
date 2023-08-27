import { combineEpics } from "redux-observable";
import fetchProductEpic from "./productsEpic";

const rootEpic = combineEpics(fetchProductEpic)

export default rootEpic