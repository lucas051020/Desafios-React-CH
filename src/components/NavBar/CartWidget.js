import { BsFillBasket2Fill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

const CartWidget = () => {
  const{calcItemsQty}= useContext(CartContext);

  return (
    <div content={calcItemsQty()}>
      <BsFillBasket2Fill />
    </div>
  );
};

export default CartWidget;
