import React, { useState } from 'react';


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
  const [newCoupon, setNewCoupon] = useState({ name: "", description: "", expirationDate: "", category: "fashion", image: null });

  
  const openEditPopup = (coupon) => {
    setSelectedCoupon(coupon);
    setShowEditPopup(true);
  };

 

const addNewCoupon = () => {
    const newCouponId = coupons.length + 1;
    const formattedCoupon = { ...newCoupon, id: newCouponId };
    formattedCoupon.image = newCoupon.image; 
    setCoupons([...coupons, formattedCoupon]);
    setNewCoupon({ name: "", description: "", expirationDate: "", category: "fashion", image: null });
    setShowAddPopup(false);
  
    
  };
  
  
  const saveChanges = () => {
  
    const updatedCoupons = coupons.map(coupon => {
      if (coupon.id === selectedCoupon.id) {
        return selectedCoupon;
      }
      return coupon;
    });
    setCoupons(updatedCoupons);
   
    setShowEditPopup(false);
  
  
    setCoupons(coupons => updatedCoupons);
  };
  

  return (
    <div className="admin-coupon-list">
      <h2>Coupon List</h2>
      <button onClick={() => setShowAddPopup(true)}>Add New Coupon</button><br /><br />
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
     
      {showAddPopup && <div className="popup">
        <div className="popup-inner">
          <h2>Add New Coupon</h2>
          <label>
            Coupon Name:
            <input type="text" value={newCoupon.name} onChange={(e) => setNewCoupon({ ...newCoupon, name: e.target.value })} />
          </label>
          <label>
            Description:
            <input type="text" value={newCoupon.description} onChange={(e) => setNewCoupon({ ...newCoupon, description: e.target.value })} />
          </label>
          <label>
           Expiry Date:
            <input type="text" value={newCoupon.expirationDate} onChange={(e) => setNewCoupon({ ...newCoupon, expirationDate: e.target.value })} />
          </label>
          <label>
            Category:
            <select value={newCoupon.category} onChange={(e) => setNewCoupon({ ...newCoupon, category: e.target.value })}>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              <option value="food">Food</option>
              <option value="beauty">Beauty</option>
            </select>
          </label>
          <label>
            Image:
            <input type="file" onChange={(e) => setNewCoupon({ ...newCoupon, image: e.target.files[0] })} />
          </label><br />
          <button onClick={addNewCoupon}> Add coupon </button>
          <button onClick={() => setShowAddPopup(false)}>back</button>
        </div>
      </div>}
     
      {showEditPopup && selectedCoupon && <div className="popup">
        <div className="popup-inner">
          <h2>Edit a coupon</h2>
          <label>
            Coupon Name:
            <input type="text" value={selectedCoupon.name} onChange={(e) => setSelectedCoupon({ ...selectedCoupon, name: e.target.value })} />
          </label>
          <label>
            Description:
            <input type="text" value={selectedCoupon.description} onChange={(e) => setSelectedCoupon({ ...selectedCoupon, description: e.target.value })} />
          </label>
          <label>
            Expiry Date:
            <input type="text" value={selectedCoupon.expirationDate} onChange={(e) => setSelectedCoupon({ ...selectedCoupon, expirationDate: e.target.value })} />
          </label>
          <label>
            Category
            <select value={selectedCoupon.category} onChange={(e) => setSelectedCoupon({ ...selectedCoupon, category: e.target.value })}>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              <option value="food">Food</option>
              <option value="beauty">Beauty</option>
            </select>
          </label>
          <label>
            Image:
            <input type="file" onChange={(e) => setSelectedCoupon({ ...selectedCoupon, image: e.target.files[0] })} />
          </label><br />
          <button onClick={saveChanges}>Save Changes</button>
          <button onClick={() => setShowEditPopup(false)}>Back</button>
        </div>
      </div>}
    </div>
  );
}

export default AdminCouponList;
