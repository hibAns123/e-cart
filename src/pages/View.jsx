import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistItem } from '../REDUX/slices/wishlistSlice'
import { addToCart } from '../REDUX/slices/cartSlice'
import { toast ,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function View() {
  const cart=useSelector(state=>state.cartReducer)
  const wishlist=useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  const [product,setProduct]=useState()
  const {id}=useParams()
  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts=JSON.parse(sessionStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])
const handleWishlist=(product)=>{
if(wishlist?.includes(product)){
 toast.info("item already in your wishlist!!")
}else{
dispatch(addWishlistItem(product))
}
}
const handleCart=(product)=>{
  const existingProduct=cart?.find(item=>item.id==product.id)

if(existingProduct){
  dispatch(addToCart(product))
toast.success("items added to yoour cart")
}else{
  dispatch(addToCart(product))

toast.success("item added to your cart")
}
}
  return (
    <>
    <Header/>
    <div className="container d-flex align-items-center" style={{marginTop:'150px'}}>
      <div className="row mb-5 align-items-center">
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <img width={'450px'} height={'400px'} src={product?.thumbnail} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
          <h5>PID: {product?.id}</h5>
          <h1>{product?.title}</h1>
          <h3 className="text-primary">$ {product?.price}</h3>
<p style={{textAlign:'justify'}}><b>Description</b> : {product?.description}</p>
<div className="d-flex justify-content-between">
  <button onClick={()=>handleWishlist(product)} className='btn btn-ouline-dark'><i className='fa-solid fa-heart text-warning'></i>Add to wishlist</button>
  <button onClick={()=>handleCart(product)} className='btn btn-outline-dark'><i className='fa-solid fa-cart-plus text-success'></i> Add to cart</button>
</div>
        </div>
      </div>
    </div>
    <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
   </>
  )
}

export default View