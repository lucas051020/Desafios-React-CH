import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Cart = () => {
  const ctx = useContext(CartContext);

  return (
    <>
        <h1>Your Cart</h1>
        <div>
          <Link to="/"><button type="button" className="btn btn-primary">Continue Shopping</button></Link>
          <button type="button" onClick={ctx.clear} className="btn btn-danger">Delete all Products</button>
        </div>
        {
          ctx.cartList.map(item =>
            <div className='d-flex'>
            <section>
              <img src={item.img} className="img-cart" alt="image cart" />
            </section>

            <section className='m-3'>
                <p>Product: {item.title}</p>
                <button type="button" onClick={() => ctx.removeItem(item.id)} className="btn btn-danger">Delete</button>
            </section>

            <section className='m-3'>
              <p>{item.quantity}Item(s)</p>
              <p>${item.cost}</p>
            </section>
            </div>
          )
        }
    </>
  )
}

export default Cart