import { ofType } from "redux-observable";
import { catchError, delay, from, map, mergeMap } from "rxjs";
import {
    fetchProductsFailure,
    fetchProductsRequest,
    fetchProductsSuccess,
} from "../action/product.action";
import axios from "axios";

const fetchProductEpic = (action$) => action$.pipe(
        ofType(fetchProductsRequest.type),
        mergeMap(() => {
            return from(axios.get("https://api.escuelajs.co/api/v1/products")).pipe(
                delay(3000),
                map((data) => fetchProductsSuccess(data)),
                catchError((error) => fetchProductsFailure(error))
            );
        })
    );

export default fetchProductEpic;
