import React from 'react';
import { CouponsList } from './CouponsLIst';

export const Fashion = ({coupons}) => {
  
  return (
    <div>
        {/* Your Food component implementation */}
        <CouponsList coupons={coupons} />
    </div>
);
};

export default Fashion;