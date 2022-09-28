import { createContext, useState, useContext } from "react";
export const CartContext = createContext();
 

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, newQuantity) => {
      const newCart = cartList.map(items => items.id !== item.id);
      newCart.push({ ...item, quantity: newQuantity});
      setCartList(newCart);
    }

    console.log('carrito: ', cartList);

    // const totalCost = () => {
    //   let cost = cartList.map (item => item.cost);
    //   return cost.reduce((prev, act) => prev + act.quantity * act.cost, 0);
    // }

    
    const totalProducts = () => cartList.reduce((acc, currentProduct) => acc + currentProduct.quantity, 0);


    const clear = () => {
      setCartList([]);
    };

    const removeItem = (itemId) => {
        setCartList(cartList.filter(item => item.id !== itemId));
    }

    const isInCart = (id) => {
      return cartList.find(item => item.id === id) ? true : false;
    }

    const calcItemsQty = () => {
      let qtys = cartList.map(item => item.quantity);
      return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

  return (
    <CartContext.Provider value={{
        cartList,
        addItem,
        clear,
        //calcTotal,
        removeItem,
        isInCart,
        totalProducts,
        calcItemsQty,
        //calcDiscount,
        //totalCost,
        //totalPrice
      }} >
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider