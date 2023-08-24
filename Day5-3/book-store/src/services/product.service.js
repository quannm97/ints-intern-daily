import { requestProducts } from "../config/axios"

export const fetchProductListAPI = () => {
    return requestProducts({
        url: `/products`,
        method: 'GET'
    })
}