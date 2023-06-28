import React from "react";
import {GrClose} from "react-icons/gr";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import img from "../../images/cameras/c1.png";
import {useContext} from "react";
import {Mycontext} from "../../config/context";
import "./Cart.css";

const Cart = ({prop}) => {
  const {
    cartItems,
    cartCount,
    removeFromCart,
    cartTotal,
    setCartShow,
  } = useContext(Mycontext);
  return (
    <>
      <div className="cart-container">
        <div
          className="cart-opac"
          onClick={() => {
            setCartShow(false);
          }}
        ></div>
        <div className="cart-wrapper">
          <div className="cart-top-section">
            <div className="cart-left">
              <h3 className="cart-heading">Euphoria</h3>
            </div>
            <div className="cart-right">
              <GrClose
                className="cart-close"
                onClick={() => {
                  setCartShow(false);
                }}
              />
            </div>
          </div>
          <div className="cart-middle-section">
            {cartItems.map(elm => {
              return (
                <div className="cart-card" key={elm.id}>
                  <div className="cart-middle-left">
                    <img
                      src={elm.image}
                      alt="product"
                      className="cart-item-img"
                    />
                    <div className="cart-item-total-amt">
                      &#8377;{elm.price * elm.quantity}
                    </div>
                  </div>
                  <div className="cart-middle-right">
                    <h3 className="cart-item-title">{elm.title}</h3>
                    <div className="cart-item-ratings">
                      <AiFillStar className="cart-rate-icon" />
                      <AiFillStar className="cart-rate-icon" />
                      <AiFillStar className="cart-rate-icon" />
                      <AiFillStar className="cart-rate-icon" />
                      <AiOutlineStar className="cart-rate-icon" />{" "}
                      <span className="rate-count"> | {elm.rating}</span>
                    </div>
                    <div className="quantity-params">
                      <span
                        className="dec"
                        onClick={() => cartCount("dec", elm)}
                      >
                        -
                      </span>
                      <span className="qunatity">{elm.quantity}</span>
                      <span
                        className="inc"
                        onClick={() => cartCount("inc", elm)}
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <div className="cart-item-close">
                    <GrClose
                      onClick={() => {
                        removeFromCart(elm);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-checkout-wrapper">
            <div className="cart-total-price">
              <h5 className="cart-total-heading">Total:</h5>
              <h5 className="cart-total-price">&#8377;{cartTotal}</h5>
            </div>
            <button className="cart-checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
