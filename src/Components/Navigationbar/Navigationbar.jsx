import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Navigationbar.css'; 

const Navigationbar = () => {
  return (
    <>
      <div className='nav'>
        <Navbar expand="lg" className="w-100">
          <Navbar.Brand href="#">
            <span className="emoji">🍔</span> FoodApp
          </Navbar.Brand>
        </Navbar>
      </div>
    </>
  )
}

export default Navigationbar