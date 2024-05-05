import React from 'react';
import { CouponsList } from './CouponsLIst';

export const Food = ({ foodCoupons }) => {
  return (
    <div>
        {/* Your Food component implementation */}
        <CouponsList coupons={foodCoupons} />
    </div>
);
};

export default Food;