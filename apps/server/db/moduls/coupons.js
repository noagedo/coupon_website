const mongoose = require("mongoose");
const couponsScheme = new mongoose.Schema({
    id:{
        type:String,
        require:true,
    },
    name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
 
  category: {
    type: String,
    enum: ["RFashion", "Beauty", "Home", "Food"],
    required: true,
  },
  code: {
    type: String
  },
  expired: {
    type: String
  },
});
const Coupon = mongoose.model("coupons", couponsScheme);

exports.Coupon = Coupon;