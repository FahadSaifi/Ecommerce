import React, {useState} from "react";
import {GrClose} from "react-icons/gr";
import "./Search.css";
import {prod} from "../../data/Productsdata";
import {useNavigate} from "react-router-dom";

const Search = ({prop}) => {
  const [search, setSearch] = useState("");
  const handleChange = e => {
    setSearch(e.target.value);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="search-wrapper">
        <div className="search-top">
          <div className="search-close-wrapper">
            <GrClose
              onClick={() => {
                prop(false);
              }}
              className="search-close"
            />
          </div>
          <div className="search-bar-wrapper">
            <input
              type="text"
              className="search-bar"
              placeholder="Search Products"
              autoFocus
              value={search}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="container">
          <div className="searched-product">
            {prod
              .filter(elm => {
                if (search == "") {
                  return elm;
                } else if (elm.title.toLowerCase().match(search)) {
                  return elm;
                }
              })
              .map(item => {
                return (
                  <div
                    className="search-product-card"
                    key={item.id}
                    onClick={() => {
                      navigate("/singleproduct/" + item.id);
                      prop(false);
                    }}
                  >
                    <div className="search-product-left">
                      <img
                        src={item.image}
                        alt="img"
                        className="search-product-img"
                      ></img>
                    </div>
                    <div className="search-product-right">
                      <h2 className="search-product-title">{item.title}</h2>
                      <p className="search-product-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
