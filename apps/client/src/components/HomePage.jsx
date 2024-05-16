

import React, { useEffect, useState } from "react";
import axios from "axios";
import { CouponsList } from "./CouponsList";

import myVideo from '../assets/Untitled design.mp4'
import myVideo2 from '../assets/zara.mp4';
import myVideo3 from '../assets/new Collection.mp4';
import myphoto from '../assets/its time for.png'



export const HomePage = () => {

  const [coupons, setCoupons] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        if (!searchQuery) {
          setCoupons([]);
          return;
        }

        const { data } = await axios.get("http://localhost:5000/api/search?q=" + searchQuery);
        setCoupons(data);
      } catch (error) {
        console.error("Error fetching coupons:", error);
      }
    };

    fetchCoupons();
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (

    <div>

<div>
      <input
        type="text"
        placeholder="Search for fashion coupons..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      {searchQuery && coupons.length > 0 ? (
        <CouponsList coupons={coupons} />
      ) : (
        <p> </p>
      )}
    </div>
    <video autoPlay loop muted src={myVideo3} className="navbar-image"></video>
    <br /><br />
            <div className="gallery">
      <div className="row">
      <video autoPlay loop muted src={myVideo} className="navbar-video"></video>
      <video autoPlay loop muted src={myVideo2} className="navbar-video"></video>
      <img src={myphoto} alt="My Photo" className="navbar-video" />
      </div>
      <br />
      <br />
      {/* Search Container and Search Component removed */}
      <br />
      <br />
 
     
    </div>
   
            
        </div>
    );

};

export default HomePage;
