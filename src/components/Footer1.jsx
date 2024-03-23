import React from 'react'
import { Link } from 'react-router-dom'

function Footer1() {
  return (
    <div style={{ height: '300px',width:'100%' }} className=' mt-5 w-100 bg-info'>
    <div className="footer-content d-flex justify-content-between container">
        <div className="media mt-5" style={{ width: '400px' }}>
            <h5 className='d-flex text-light fw-bolder'><i style={{ height: '25px' }} className="fa-solid fa-truck-fast me-3"></i>Cart</h5>
            <p style={{ textAlign: 'justify', color:'white'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit.provident placeat magni  deserunt! Iste, quod!</p>
            <span className='text-light'>code licencsed MIT,CC By 3.0</span>
            <span className='text-light'>Currently 5.0</span>
        </div>
        <div className="links d-flex flex-column mt-5">
            <h5 className='d-flex text-light fw-bolder'>Links</h5>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
            <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}>WishList</Link>
        </div>
        <div className="guides d-flex flex-column mt-5">
            <h5 className=' text-light fw-bolder'>Guides</h5>
            <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }}>React</a>
            <a href="https://react-bootstrap.github.io/" style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</a>
            <a href="https://reactrouter.com/en/main" style={{ textDecoration: 'none', color: 'white' }}>React Routing</a>

        </div>
        <div className="contact mt-5 ">
            <h5 className=' text-light fw-bolder'>Contact Us</h5>
            <div className="d-flex">
                <input type="text" className="form-control me-1" placeholder='Email Id Please' />
                <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="icons d-flex justify-content-between mt-3">
                <a href="https://react.dev/" target='blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-twitter fa-1x"></i></a>
                <a href="https://react.dev/" target='blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-instagram"></i></a>
                <a href="https://react.dev/" target='blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-facebook"></i></a>
                <a href="https://react.dev/" target='blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://react.dev/" target='blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-github"></i></a>
                <a href="https://react.dev/" target='blank' style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-phone"></i></a>
            </div>
        </div>
    </div>
    <p className='text-center mt-5'>Copyright &copy; 2024 Media Player. Built with React. </p>
</div>
  )
}

export default Footer1