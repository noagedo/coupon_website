import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../assets/CouponLogo.png'; // Adjust the path as necessary


export const NavBar = () => {
    return (
        <div>
            <img src={myImage} alt="Description of the image" className="navbar-image"/>

        <div>
            <div className="navbar">
                <img 
                    src="https://thumbs.dreamstime.com/b/discount-coupon-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-82602269.jpg" 
                    alt="Logo" 
                    className="logo-image" 
                />
                <Link to="/admin">Admin <i className="fa fa-solid fa-lock"></i> </Link>
                <Link to="/login">Login <i className="fa fa-fw fa-user"></i> </Link>
                <Link className="active" to="/"> Home <i className="fa fa-fw fa-home"></i></Link>
                <Link to="/wishlist">WishList <i className="fa fa-solid fa-heart"></i> </Link>
                <div className="dropdown">
                    <button className="dropbtn">Category  <i className="fa fa-solid fa-list"></i> 
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/Fashion">Fashion</Link>
                        <Link to="/Beauty">Beauty</Link>
                        <Link to="/Home">Home</Link>
                        <Link to="/Food">Food</Link>
                    </div>
                </div>
            </div>

           
        </div>


        </div>
    );
};

export default NavBar;

