import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CouponsList = ({ coupons }) => {
  const [selectedCoupons, setSelectedCoupons] = useState([]);

  useEffect(() => {
    const fetchUserWishList = async () => {
      try {
        // Fetch user's wish list from the server
        const response = await axios.get("http://localhost:5000/user/getUser");
        const user = response.data;
        // Update selectedCoupons state with user's wish list
        setSelectedCoupons(user.wishList);
      } catch (error) {
        console.error("Error fetching user wish list:", error);
      }
    };

    fetchUserWishList();
  }, []);

  const toggleCouponSelection = async (couponId) => {
    if (selectedCoupons.includes(couponId)) {
      setSelectedCoupons(selectedCoupons.filter(id => id !== couponId));
      // Remove the coupon from the user's wish list in the server
      await axios.post("http://localhost:5000/user/removeCouponFromWishList", { couponId });
    } else {
      setSelectedCoupons([...selectedCoupons, couponId]);
      // Add the coupon to the user's wish list in the server
      await axios.post("http://localhost:5000/user/addCouponToWishList", { couponId });
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
      }}
    >
      {coupons.map((coupon) => (
        <div
          key={coupon.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            overflow: "hidden",
            position: "relative"
          }}
        >
          <h2>{coupon.name}</h2>
          <div
            style={{
              width: "100%",
              paddingBottom: "75%",
              position: "relative",
            }}
          >
            <img
              src={coupon.imageSrc}
              alt={coupon.name}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "270px",
                height: "200px",
              }}
            />
          </div>
          <p>
            <strong>Description:</strong> {coupon.description}
          </p>
          <p>
            <strong>Discount Percentage:</strong> {coupon.discount}%
          </p>
          <p>
            <strong>Expiry Date:</strong> {coupon.expired}
          </p>
          <p>
            <strong>Code:</strong> {coupon.code}
          </p>
          <div>
            <i
              className={`fa fa-heart fa-2x ${selectedCoupons.includes(coupon.id) ? 'selected' : ''}`}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
                color: selectedCoupons.includes(coupon.id) ? 'red' : 'black',
              }}
              onClick={() => toggleCouponSelection(coupon.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CouponsList;
