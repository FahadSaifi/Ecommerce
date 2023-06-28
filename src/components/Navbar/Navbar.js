import React from "react";
import {NavLink} from "react-router-dom";
import {Navdata} from "../../data/Navdata";
import {AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai";
import {FaBars, FaTimes} from "react-icons/fa";
import {useState, useContext} from "react";
import Search from "../Search/Search";
import Cart from "../Cart/Cart";
import {useNavigate} from "react-router-dom";
import {Mycontext} from "../../config/context";
import "./Navbar.css";

const Navbar = () => {
  const {cartShow, setCartShow} = useContext(Mycontext);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    setShow(true);
  };
  const showOpac = () => {
    setShow(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo-wrapper">
          <h2 className="logo" onClick={() => navigate("/")}>
            Euphoria
          </h2>
        </div>
        <div className="mobile-nav" onClick={handleShow}>
          {<FaBars className="bars" />}
        </div>
        {show ? (
          <div className="nav-opac-layer" onClick={showOpac}></div>
        ) : null}
        <div className={show ? "right-col active" : "right-col"}>
          <ul className="nav-items-wrapper">
            <FaTimes onClick={() => setShow(false)} className="close" />
            {Navdata.map(elm => {
              return (
                <li className="nav-item" key={elm.id}>
                  <NavLink
                    to={elm.url}
                    className="nav-link"
                    onClick={() => setShow(false)}
                  >
                    {elm.navlink}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="nav-func-wrapper">
            <div className="search">
              <AiOutlineSearch
                className="func-icon"
                onClick={() => {
                  setSearch(true);
                }}
              />
            </div>
            <div className="cart">
              <AiOutlineShoppingCart
                className="func-icon"
                onClick={() => {
                  setCartShow(true);
                }}
              />
            </div>
          </div>
        </div>
      </nav>
      {search && <Search prop={setSearch} />}
      {cartShow && <Cart />}
    </>
  );
};

export default Navbar;
