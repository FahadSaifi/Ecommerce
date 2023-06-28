import React from "react";
import heroImg from "../../images/banner.png";
import Products from "../../components/Products/Products";
import Collection from "../../components/Collection/Collection";
import {AiTwotoneShopping} from "react-icons/ai";
import {BiFilterAlt} from "react-icons/bi";
import {GrClose} from "react-icons/gr";
import {prod} from "../../data/Productsdata";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState(prod);
  const [filter, setFilter] = useState(false);
  const navigate = useNavigate();
  const filterItem = categ => {
    const cat = prod.filter(elm => {
      return elm.category == categ;
    });
    setData(cat);
  };
  return (
    <>
      <div className="hero-section-wrapper">
        <div className="container heighted-container">
          <div className="hero-flex-container">
            <div className="left-column">
              <h1 className="hero-heading">
                Awesome headphone, <br />
                you can’t resist to listen
                <br />
              </h1>
              <h2 className="hero-highlight-heading">Flat 50% OFF!</h2>
              <p className="hero-tagline">
                Feel and live the music you are listening
                <br />A reliable headphone ever
              </p>
              <button
                className="hero-btn"
                onClick={() => navigate("/specificproduct/Wireless-Headphones")}
              >
                <AiTwotoneShopping className="hero-btn-icon" /> Shop Now
              </button>
            </div>
            <div className="right-column">
              <img src={heroImg} alt="fashion" className="hero-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Collection />
      </div>
      <div className="container">
        <div className="products-heading-wrapper">
          <h2 className="products-heading">Our Products</h2>
        </div>
      </div>
      <div className="container">
        <div className="filters-mobile-wrapper" onClick={() => setFilter(true)}>
          <BiFilterAlt className="filter-icon  " />
          <p className="filter-icon-heading">Filters</p>
        </div>
        {filter ? <div className="opac"></div> : null}
        {filter && (
          <div className="products-filter">
            <div className="filter-close-icon-wrapper">
              <GrClose
                className="filter-close-icon"
                onClick={() => setFilter(false)}
              />
            </div>
            <div
              className="product-filter"
              onClick={() => {
                filterItem("Wireless-Headphones");
                setFilter(false);
              }}
            >
              <span className="product-filter-heading">Headphones</span>
            </div>
            <div
              className="product-filter"
              onClick={() => {
                filterItem("Wireless-Earbuds");
                setFilter(false);
              }}
            >
              <span className="product-filter-heading">Earbuds</span>
            </div>
            <div
              className="product-filter"
              onClick={() => {
                filterItem("SmartPhones");
                setFilter(false);
              }}
            >
              <span className="product-filter-heading">Smartphones</span>
            </div>
            <div
              className="product-filter"
              onClick={() => {
                filterItem("Tablets");
                setFilter(false);
              }}
            >
              <span className="product-filter-heading">Ipads</span>
            </div>
            <div
              className="product-filter"
              onClick={() => {
                filterItem("Digital-Cameras");
                setFilter(false);
              }}
            >
              <span className="product-filter-heading">Cameras</span>
            </div>
            <div
              className="product-filter"
              onClick={() => {
                filterItem("Speakers");
                setFilter(false);
              }}
            >
              <span className="product-filter-heading">Speakers</span>
            </div>
            <div
              className="product-filter"
              onClick={() => {
                filterItem("Soundbar");
                setFilter(false);
              }}
            >
              <span className="product-filter-heading">Soundbar</span>
            </div>
            <div
              className="product-filter"
              onClick={() => {
                setData(prod);
                setFilter(false);
              }}
            >
              <span className="product-filter-heading">All</span>
            </div>
          </div>
        )}
        <div className="products-wrapper">
          <Products prod={data} />
        </div>
      </div>
    </>
  );
};

export default Home;
