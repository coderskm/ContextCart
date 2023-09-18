import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';
import { useNavigate } from 'react-router-dom';
function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const handleCartClick = (id) => {
    addToCart(id);
    navigate('/cart');
  }
  return (
    <div className="product" key={id}>
      <img src={productImage} alt="products"/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>${price}</b>
        </p>
      </div>
      <button className="addToCartBttn" onClick={() => handleCartClick(id)}>
        <b>Add To Cart</b>
      </button>
    </div>
  );
}

export default Product