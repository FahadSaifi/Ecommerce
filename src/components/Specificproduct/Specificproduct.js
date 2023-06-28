import {useParams, useLocation} from "react-router-dom";
import Products from "../Products/Products";
import {prod} from "../../data/Productsdata";
import "./Specificproduct.css";
import {useEffect} from "react";

const Specificproduct = () => {
  const location = useLocation();
  let specificProd = "";
  const {category} = useParams();

  const categProduct = () => {
    return prod.filter(elm => {
      return elm.category == category;
    });
  };

  if (category) {
    specificProd = categProduct();
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="specific-product-wrapper">
        <div className="container">
          <h1 className="specific-product-heading">
            {category.split("-").map(elm => {
              return elm + " ";
            })}
          </h1>
          <Products prod={specificProd} />
        </div>
      </div>
    </>
  );
};

export default Specificproduct;
