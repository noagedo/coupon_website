const mongoose = require("mongoose");
const Coupon = new mongoose.Schema({
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
    enum: ["Fashion", "Beauty", "Home", "Food"],
    required: true,
  },
  code: {
    type: String
  },
  expired: {
    type: String
  },
});
const couponModel = mongoose.model("coupons", Coupon);

module.exports = {
  Coupon,
  couponModel,
};