import { BsFillBasket2Fill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

const CartWidget = () => {
  const test = useContext(CartContext);

  return (
    <div>
      <BsFillBasket2Fill />
    </div>
  );
};

export default CartWidget;
