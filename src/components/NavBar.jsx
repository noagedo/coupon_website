
import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../assets/CouponLogo.png'; // Adjust the path as necessary
import AsyncSelect from 'react-select/async';

const coupons = [
    { value: '1', label: 'Berska' },
    { value: '2', label: 'Zara' },
    { value: '3', label: 'Pull and Bear' },
    { value: '4', label: 'Twentyfourseven' },
    { value: '5', label: 'ALDO' },
    { value: '6', label: 'Foot Locker' },
    { value: '7', label: 'Adidas' },
    { value: '8', label: 'SUPER FHARAM' },
    { value: '9', label: 'Be' },
    { value: '10', label: 'MAC' },
    { value: '11', label: 'SABON' },
    { value: '12', label: 'IL MAKIAGE' },
    { value: '13', label: 'LALINE' },
    { value: '14', label: 'BOBI BROWN' },
    { value: '15', label: 'IKEA' },
    { value: '16', label: 'Home Center' },
    { value: '17', label: 'ACE' },
    { value: '18', label: 'Electrical Warehouses' },
    { value: '19', label: 'Bethili' }, 
    { value: '20', label: 'Castro home' },
    { value: '21', label: 'Zara Home' },
    { value: '22', label: "domino's pizza" },
    { value: '23', label: 'Burger King' },
    { value: '24', label: 'Japanika' },
    { value: '25', label: 'The Mexicani' },
    { value: '26', label: 'Cafe Cafe' },
    { value: '27', label: 'MAX BRENNER' },
    { value: '28', label: 'Tamara' },



]


export const NavBar = () => {
    const filterCoupons = (inputValue) => {
        return coupons.filter((i) =>
          i.label.toLowerCase().includes(inputValue.toLowerCase())
        )}

    const handleOption =(inputValue, cb)=>{
        console.log(inputValue);
        cb(filterCoupons(inputValue));

    }
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
            <AsyncSelect cacheOptions loadOptions={handleOption} defaultOptions />

           
        </div>


        </div>
    );
};

export default NavBar;

