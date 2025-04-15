import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Table, Button} from 'react-bootstrap'
import { removeFromCart, } from '../redux/cartSlice'

function Cart() {
    const cartItems = useSelector(state => state.cart.items)
    console.log(cartItems);
    const dispatch = useDispatch()


    
    const handleRemoveFromCart = (item)=>{
      dispatch(removeFromCart(item))
    }
    
  return (
    <>
        <div> 
            <h1>Shopping Cart</h1>
            {cartItems.length==0?(<p>Your cart is empty</p>):(
                <Table>
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item=>(
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                          <td><Button vaiant='danger' onClick={()=>handleRemoveFromCart(item.id)}>Remove Item</Button></td>
                        </tr>
                      ))}
                    </tbody>
                  
                </Table>
            )
            }
        </div>
    </>
  )
}

export default Cart
