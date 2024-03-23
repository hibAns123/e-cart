import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem,incQuantity,decQuantity,emptyCart } from '../REDUX/slices/cartSlice'

function Cart() {
  const cart=useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal]=useState(0)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(cart?.length>0){
setCartTotal(cart?.map(item=>item.totalPrice).reduce((t1,t2)=>t1+t2))
    }else{
      setCartTotal(0)
    }
  },[cart])
  const handleDecrementQuantity=(product)=>{
    if(product.quantity>1){
      dispatch(decQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }
  return (
    <>
        <Header/>
    
    <div className="container" style={{marginTop:"100px"}}>
  {cart?.length>0?
    <div className='pt-5'>
      <h1>Cart Summary</h1>
<div className="row mt-5">

  {cart?.map((product,index)=>(<div className="col-lg-8">
    <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{index+1}</td>
          <td>{product.title.slice(0,16)}</td>
          <td><img src={product.thumbnail} width={'60px'} height={'60px'} alt="" /></td>
          <td>
            <div className='d-flex'>
              <button onClick={()=>handleDecrementQuantity(product)} className='btn fw-bolder'>-</button>
             
       <input value={product.quantity} type="text" style={{width:'70px'}} className='form-control' placeholder='0'readOnly/>
      <button onClick={()=>dispatch(incQuantity(product.id))} className='btn fw-bolder'>+</button>
            </div>
          </td>
          <td>${product.totalPrice}</td>
          <td><button onClick={()=>dispatch(removeCartItem(product.id))} className='btn'><i className="fa-solid fa-trash text-warning"></i></button></td>
        </tr>
      </tbody>
    </table>
    <div className="float-end mt-3">
      <div onClick={()=>dispatch(emptyCart())} className="btn btn-warning">EMPTY CART</div>
      <Link className='btn btn-danger ms-5' tbody to={'/'} >Shop more</Link>
    </div>
  </div>))}
  <div className="col-lg-4">
    <div className="shadow border rounded p-4">
      <h5>Total Product: <b className='text-success'>{cart?.length}</b></h5>
      <h4>Total Amount: <b className='text-success'>$ {cartTotal}</b></h4>
      <div className="d-grid mt-4">
        <button className='btn btn-success'>Check Out</button>
      </div>
    </div>
  </div>
</div>
      </div>
    :
      <div className="w-100 d-flex justify-content-center align-items-center flex-column" style={{height:"70vh"}}>
        <img src="1.png" className='img-fluid' width={'400px'} alt="" />
        <h1>Your Cart Is Empty!!</h1>
      </div>}
    
    </div>

    </>
  )
}

export default Cart