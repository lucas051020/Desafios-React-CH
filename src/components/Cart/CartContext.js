import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCarList] = useState([]);

    const addItem = (product, quantity) => {
      const newCart = cartList.filter(prod => prod.id !== product.id);
      newCart.push({...product, quantity: quantity});
      setCarList(newCart);
    }

    const clear = () => {
        setCarList([]);
    };

    const removeItem = (itemId) => {
        setCarList(cartList.filter(item => item.id !== itemId));
    }

    const isInCart = (id) => {
      return cartList.find(item => item.id === id) ? true : false;
    }

  return (
    <CartContext.Provider value={{cartList, addItem, clear, removeItem, isInCart}} >
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider