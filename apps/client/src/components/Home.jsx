import React from 'react';
import { CouponsList } from './CouponsLIst';

export const Home = () => {
  return (
    <div>
        {/* Your Food component implementation */}
        <CouponsList coupons={coupons} />
    </div>
);
};


export default Home;