import { Link } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
import React, { useContext } from 'react'
import "./Cart.css"

const Cart = () => {
  const ctx = useContext(CartContext);

  return (
    <> 
        <h1 className='title-cart'>Your Cart</h1>
        <div>
          <Link to="/"><button type="button" className="btn btn-primary btn-continueShop">Continue Shopping</button></Link>
          <button type="button" onClick={ctx.clear} className="btn btn-danger btn-deleteAllProducts">Delete all Products</button>
        </div>
        
        {
          ctx.cartList.map(item => 
            <div className='d-flex' key={item.id}>
              <section>
                <img src={item.img} className="img-cart" alt={item.title} />
              </section>

              <section className='m-3'>
                  <p>Product: {item.title}</p>
                  <p>Stock: {item.stock}</p>
                  <button type="button" onClick={() => ctx.removeItem(item.id)}  className="btn btn-danger">Delete</button>
              </section>

              <section className='m-3'>
                <p>{item.quantity} Item(s)/${item.cost}</p>
                <p>${item.cost * item.quantity}</p>
              </section>

              <section className='order-summary'>
                <h3>Order Summary</h3>
                <p>Subtotal: ${item.cost * item.quantity}</p>
                <h4>Total: {ctx.totalCost()}</h4>
                <button type="button" onClick={ctx.clear} className="btn btn-success">Finish Shopping</button>
              </section>
            </div>
          )
        }
    </>
  )
}

export default Cart