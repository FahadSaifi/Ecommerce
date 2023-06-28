import {useEffect} from "react";
import {createContext, useState} from "react";
export const Mycontext = createContext();

const Appcontext = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartShow, setCartShow] = useState(false);
  const [collection, setCollection] = useState("");

  const subTotal = () => {
    let total = 0;
    cartItems.forEach(elm => {
      total += elm.price * elm.quantity;
    });
    setCartTotal(total);
  };

  useEffect(() => {
    subTotal();
  }, [cartItems]);
  const addToCart = (item, quan = 1) => {
    let items = [...cartItems];
    let index = cartItems.findIndex(elm => elm.id === item.id);
    if (index !== -1) {
      items[index].quantity += quan;
    } else {
      item.quantity = quan;
      items = [...items, item];
    }
    setCartItems(items);
  };
  const cartCount = (type, product) => {
    let items = [...cartItems];
    const index = items.findIndex(elm => {
      return elm.id === product.id;
    });
    if (type == "inc") {
      items[index].quantity += 1;
    } else if (type == "dec") {
      if (items[index].quantity == 1) return;
      items[index].quantity -= 1;
    }
    setCartItems(items);
  };

  const removeFromCart = product => {
    let items = [...cartItems];
    items = items.filter(elm => {
      return elm.id !== product.id;
    });
    setCartItems(items);
  };
  return (
    <>
      <div>
        <Mycontext.Provider
          value={{
            addToCart,
            cartItems,
            cartCount,
            removeFromCart,
            cartTotal,
            cartShow,
            setCartShow,
            collection,
            setCollection,
          }}
        >
          {children}
        </Mycontext.Provider>
      </div>
    </>
  );
};

export default Appcontext;
