import React from 'react'
import './ProductCard.scss'

const ProductCard = ({product}) => {

    const randomNumb = () => {
        return Math.floor(Math.random()*2)
    }
    
  return (
    <>
        <div className="productCard">
                <div className="productCard__img">
                    <img src={product?.images[randomNumb()]} alt="productImg" />
                </div>

                <div className="productCard__detail">
                    <h3 className='productCard__detail--title'>{product?.title}</h3>
                    <p className="productCard__detail--price">$ {product?.price}</p>
                    <p className='productCard__detail--description'>{product?.description}</p>
                    <button>ADD TOO CART</button>
                </div>
            </div>
    </>
  )
}

export default ProductCard