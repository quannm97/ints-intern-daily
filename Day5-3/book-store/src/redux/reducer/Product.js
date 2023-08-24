
const initialState = {
    books: [],
    loading: false,
    fetched: false,
    error: false
}
const product = (state= initialState, action) => {
    switch (action.types) {
        case 'FETCH_PRODUCT_REQUEST':
            return {
                ...state,
                loading:true
            }
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                fetch: true,
                books: action.payload
            }
            case 'FETCH_PRODUCT_ERROR':
                return {
                    ...state,
                    loading: false,
                    fetch: false,
                }
        default:
            return state;
    }
}

export default product;