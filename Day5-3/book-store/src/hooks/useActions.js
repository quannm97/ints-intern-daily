import { useDispatch } from "react-redux"
import { fetchProduct } from "../redux/action/Product.action"

const useActions = () => {

    const dispatch = useDispatch()


    const fetchProductAction = data => {
        dispatch(fetchProduct(data))
    }

    return {
        fetchProductAction
    }
}

export default useActions;