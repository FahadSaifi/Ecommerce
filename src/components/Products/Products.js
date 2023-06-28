import React from "react";
import Product from "../Product/Product";
// import {prod} from "../../data/Productsdata";
import "./Products.css";

const Products = ({prod}) => {
  return (
    <>
      <div className="layout">
        <Product prod={prod} />
      </div>
    </>
  );
};

export default Products;
