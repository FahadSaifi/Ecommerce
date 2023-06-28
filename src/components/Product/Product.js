import React from "react";
import {useNavigate} from "react-router-dom";
import "./Product.css";
import {useContext} from "react";
import {Mycontext} from "../../config/context";

const Product = ({prod, quantity}) => {
  const {addToCart, setCartShow} = useContext(Mycontext);
  const navigate = useNavigate();
  return (
    <>
      {prod.map(elm => {
        return (
          <div className="product-card" key={elm.id}>
            <div
              className="product-img-wrapper"
              onClick={() => {
                navigate("/singleproduct/" + elm.id);
              }}
            >
              <img src={elm.image} alt="beg" className="product-img" />
            </div>
            <div className="product-content-flex-container">
              <div className="product-content">
                <h2 className="product-title">
                  {elm.title.length > 20
                    ? elm.title.substring(0, 25) + " ..."
                    : elm.title}
                </h2>
                <h2 className="product-price">Price: &#8377;{elm.price}</h2>
                <p className="product-description">
                  {elm.description.length > 40
                    ? elm.description.substring(0, 50) + " ..."
                    : elm.description}
                </p>
              </div>
              <div
                className="add-cart-btn"
                onClick={() => {
                  addToCart(elm, quantity);
                  setCartShow(true);
                }}
              >
                Add to cart
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
