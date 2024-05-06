import React from 'react';
import { CouponsList } from './CouponsLIst';

export const Food = ({ foodCoupons }) => {
  return (
        <CouponsList coupons={foodCoupons} />

);
};

export default Food;