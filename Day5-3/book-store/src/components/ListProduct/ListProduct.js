import React, { useEffect, useState } from "react";
import { fetchProductListAPI } from "../../services/product.service";
import ProductCard from "../ProductCard/ProductCard";

const ListProduct = () => {
    const [productList, setProductList] = useState();
    
    useEffect(() => {
        fetchProductList()
        
    }, [])
    
    const fetchProductList = async () => {
        const result = await fetchProductListAPI()
        setProductList(result?.data)
    }

    const renderProductList = () => {

        return productList.map((product) => {
            return <ProductCard key={product?.id} product={product}/>
        })
    }

    return (
        <>
            <div className="product-list">
                <div className="container">
                  {productList && renderProductList()}
                </div>
            </div>
        </>
    );
};

export default ListProduct;
