import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsRequest } from "../../redux/action/product.action";
import LoadingParallax from "../LoadingAnimation/LoadingParallax";

const ProductList = () => {

    const {products, loading, error} = useSelector((state) => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductsRequest())
    }, [dispatch])
    


    const renderProductList = () => {

        return products.data.map((product) => {            
            return <ProductCard key={product?.id} product={product}/>
        })
    }
    if (loading) {
        return <>
            <LoadingParallax/>
        </>
    }

    if(error) {
        return <>
            ...Bad connection
        </>
    }
    return (
        <>
            <div className="product-list">
                <div className="container">
                  {products && products.data && renderProductList()}
                </div>
            </div>
        </>
    );
};

export default ProductList;
