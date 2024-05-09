import React, { useState } from 'react';
import CouponFormPopup from './CouponFormPopup';

function AdminCouponList() {
  const [coupons, setCoupons] = useState([
    { id: 1, name: "קופון 1", description: "תיאור קופון 1", expirationDate: "01/01/2025", category: "fashion", image: null },
    { id: 2, name: "קופון 2", description: "תיאור קופון 2", expirationDate: "05/31/2024", category: "home", image: null },
    { id: 3, name: "קופון 3", description: "תיאור קופון 3", expirationDate: "12/15/2024", category: "food", image: null }
  ]);

  const deleteCoupon = (id) => {
    const updatedCoupons = coupons.filter(coupon => coupon.id !== id);
    setCoupons(updatedCoupons);
  };

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const openEditPopup = (coupon) => {
    setSelectedCoupon(coupon);
    setShowEditPopup(true);
  };

  const openAddPopup = () => {
    setSelectedCoupon(null);
    setShowAddPopup(true);
  };

  const onSubmit = (values, { setSubmitting }) => {
    if (selectedCoupon) {
      const updatedCoupons = coupons.map(coupon =>
        coupon.id === selectedCoupon.id ? { ...selectedCoupon, ...values } : coupon
      );
      setCoupons(updatedCoupons);
      setShowEditPopup(false);
    } else {
      const newCouponId = coupons.length + 1;
      const formattedCoupon = { ...values, id: newCouponId };
      formattedCoupon.image = values.image; 
      setCoupons([...coupons, formattedCoupon]);
      setShowAddPopup(false);
    }
    setSubmitting(false);
  };

  return (
    <div className="admin-coupon-list">
      <h2>Coupon List</h2>
      <button onClick={openAddPopup}>Add New Coupon</button><br /><br />
      <ul className="coupon-list">
        {coupons.map((coupon) => (
          <li key={coupon.id} className="coupon-item">
            <strong> Coupon Name:</strong> {coupon.name}<br />
            <strong>Description:</strong> {coupon.description}<br />
            <strong>Expiry Date:</strong> {coupon.expirationDate}<br />
            <strong>Category:</strong> {coupon.category}<br />
            {coupon.image && <img src={coupon.image} alt={coupon.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />} 
            <br />
            <button onClick={() => deleteCoupon(coupon.id)}>Delete</button>
            <button onClick={() => openEditPopup(coupon)}>Edit</button>
          </li>
        ))}
      </ul>
     
      {showAddPopup && (
        <CouponFormPopup
          initialValues={{ name: '', description: '', expirationDate: '', category: 'fashion', image: null }}
          onSubmit={onSubmit}
          onCancel={() => setShowAddPopup(false)}
        />
      )}
     
      {showEditPopup && selectedCoupon && (
        <CouponFormPopup
          initialValues={selectedCoupon}
          onSubmit={onSubmit}
          onCancel={() => setShowEditPopup(false)}
        />
      )}
    </div>
  );
}

export default AdminCouponList;
