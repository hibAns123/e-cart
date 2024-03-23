import React from 'react'
import Header from '../components/Header'
import { Card, Col, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../REDUX/slices/wishlistSlice'
import { addToCart } from '../REDUX/slices/cartSlice'

import { toast ,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Wishlist() {
  const cart=useSelector(state=>state.cartReducer)

  const wishlist = useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  const handleCart=(product)=>{
    const existingProduct=cart?.find(item=>item.id==product.id)
  
  if(existingProduct){
    dispatch(addToCart(product))
    dispatch(removeWishlistItem(product.id))
  toast.success("items added to yoour cart")
  }else{
    dispatch(addToCart(product))
    dispatch(removeWishlistItem(product.id))

  }
  }
  return (
    <>
    <Header/>
     <div className="container" style={{marginTop:"100px"}}>
    {wishlist?.length>0?<Row className='mt-5'>
          {wishlist?.map(product=>( <Col className="mb-5" sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem' }}>
              <Card.Img style={{ height: '180px' }} variant="top" src={product?.thumbnail} />
              <Card.Body>
                <Card.Title className='text-center'>{product?.title.slice(0,15)}</Card.Title>

                <div className='text-center'> 
                <div className="d-flex justify-content-between">
                  <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn'>
                    <i className='fa-solid fa-heart-circle-xmark text-warning'></i>
                  </button>
                  <button onClick={()=>handleCart(product)} className="btn"><i className='fa-solid fa-cart-plus text-success'></i></button>
                  </div></div>
              </Card.Body>
            </Card>
          </Col>))
           }
        </Row>:
        
      <div className="w-100 d-flex justify-content-center align-items-center flex-column" style={{height:"70vh"}}>
        <img src="1.png" className='img-fluid' width={'400px'} alt="" />
        <h1>Your Wishlist Is Empty!!</h1>
      </div>
   
    }
     </div>
     <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
  )
}

export default Wishlist