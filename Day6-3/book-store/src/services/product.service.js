import { requestProducts } from "../api/requestProducts"


export const fetchProductListAPI = () => {
    return requestProducts({
        url: `/products`,
        method: 'GET'
    })
}