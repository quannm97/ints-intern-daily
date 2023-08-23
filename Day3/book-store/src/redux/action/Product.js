import {types} from "../actionsType";

export const fetchProduct = data => ({
    type: types.FETCH_PRODUCT_REQUEST,
    payload: data
})