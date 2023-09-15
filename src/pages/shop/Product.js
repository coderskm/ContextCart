import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContextProvider';

function Product( props ) {
  const { id, productName, price, productImage } = props.data;
  const {addToCart } = useContext(ShopContext);
  return (
    <div className='product' key={id} >
      <img src={productImage} alt='products'/>
      <div className="description">
        <p>
          <b>{productName }</b>
        </p>
        <p>
          ${price}
        </p>
      </div>
      <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add To Cart</button>
    </div>
  )
}

export default Product