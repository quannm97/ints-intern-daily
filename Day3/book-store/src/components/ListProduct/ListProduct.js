import React, { useEffect, useState } from "react";
import useActions from "../../hooks/useActions";
import { fakeProductAPI } from "../../api/bookService";

const ListProduct = () => {
    const [movieList, setMovieList] = useState();

    return (
        <>
            <div className="product-list">
                <div className="container">
                  {/* {movieList} */}
                </div>
            </div>
        </>
    );
};

export default ListProduct;
