import React from 'react';

export const NavBar = () => {
    return (
        <div>
            <div className="navbar">
                <img 
                    src="https://thumbs.dreamstime.com/b/discount-coupon-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-82602269.jpg" 
                    alt="Logo" 
                    className="logo-image" 
                    
                />
                <a href="#Admin">#Admin <i className="fa fa-fw fa-user"></i> </a>
                <a href="#Login">Login <i className="fa fa-fw fa-user"></i> </a>
                <a className="active" href="#"> Home <i className="fa fa-fw fa-home"></i></a>
                <a href="#WishList">WishList <i className="fa fa-solid fa-heart"></i> </a>
                <div className="dropdown">
                    <button className="dropbtn">Category  <i className="fa fa-solid fa-list"></i> 
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Fashion</a>
                        <a href="#">Beauty</a>
                        <a href="#">Home</a>
                        <a href="#">Food</a>
                    </div>
                </div>
            </div>

            <div>
                {/* Additional content */}
            </div>
        </div>
    );
};
