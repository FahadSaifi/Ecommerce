import React from "react";
import {collData} from "../../data/Collectiondata";
import {useNavigate} from "react-router-dom";
import "./Collection.css";

const Collection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="collection-wrapper">
        <h2 className="collection-heading">Our Collection</h2>
        <div className="collection-cards-wrapper">
          {collData.map(elm => {
            return (
              <div
                className="collection-card"
                key={elm.id}
                onClick={() => {
                  navigate("/specificproduct/" + elm.category);
                }}
              >
                <img src={elm.image} alt="" className="collection-card-img" />
                <span className="collection-card-title">{elm.category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Collection;
