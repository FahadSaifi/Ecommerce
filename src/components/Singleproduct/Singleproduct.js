import {useEffect, useState, useContext} from "react";
import {BsStarFill, BsStarHalf, BsCart2, BsTruck} from "react-icons/bs";
import {GiReturnArrow} from "react-icons/gi";
import {useParams} from "react-router-dom";
import {prod} from "../../data/Productsdata";
import Product from ".././Product/Product";
import {useLocation} from "react-router-dom";
import {Mycontext} from "../../config/context";
import "./Singleproduct.css";

const Singleproduct = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const {addToCart, setCartShow} = useContext(Mycontext);

  const count = type => {
    if (type == "inc") {
      setQuantity(previous => {
        return previous + 1;
      });
    } else if (type == "dec") {
      if (quantity == 1) return;
      setQuantity(previous => {
        return previous - 1;
      });
    }
  };

  let reletedProducts;
  if (product) {
    reletedProducts = getRelatedProducts(product.category);
  }

  const filteredProduct = () => {
    const fitlereItem = prod.find(elm => {
      return elm.id == id;
    });
    setProduct(fitlereItem);
  };

  function getRelatedProducts(categoryId) {
    return prod.filter(item => {
      return item.category == categoryId;
    });
  }

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    filteredProduct();
  }, [reletedProducts]);

  return (
    <>
      <div className="single-product-wrapper">
        <div className="container">
          <div className="singleproduct-flex-container" key={product.id}>
            <div className="single-product-left-col">
              <img
                src={product.image}
                alt="product"
                className="single-product-img"
              />
            </div>
            <div className="single-prouduct-right-col">
              <h4 className="single-product-title">{product.title}</h4>
              <h4 className="single-product-description">
                {product.description}
              </h4>
              <h4 className="single-product-ratings">
                {product.rating} | <BsStarFill className="rating-icon" />
                <BsStarFill className="rating-icon" />
                <BsStarFill className="rating-icon" />
                <BsStarFill className="rating-icon" />
                <BsStarHalf className="rating-icon" />
              </h4>
              <h4 className="single-product-price">
                Price: &#8377;{product.price}
              </h4>
              <p className="suggested-payments">
                Suggested payments with 6 months special financing
              </p>
              <div className="single-prod-info">
                <div className="add-cart-counters">
                  <span className="inc" onClick={() => count("dec")}>
                    -
                  </span>
                  <span className="cart-total-quantity">{quantity}</span>
                  <span className="dec" onClick={() => count("inc")}>
                    +
                  </span>
                </div>
                <div
                  className="add-cart-product-btn"
                  onClick={() => {
                    addToCart(product, quantity);
                    setCartShow(true);
                  }}
                >
                  <BsCart2 /> Add to cart
                </div>
              </div>
              <div className="a">
                <div className="single-product-delivery">
                  <div className="delivery-left-top-col">
                    <BsTruck className="truck" />
                    <h4 className="free-delivery-heading">Free Delivery</h4>
                  </div>
                  <div className="delivery-left-bottom-col">
                    <GiReturnArrow className="return" />
                    <h4 className="easy-returns-heading">Easy Returns</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="related-products-heading">Related Products</h2>
        <div className="layout">
          <Product prod={reletedProducts} quantity={quantity} />
        </div>
      </div>
    </>
  );
};

export default Singleproduct;
