const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ordersSchema = new Schema({
  fname: {
    type: String
  },
  surname: {
    type: String
  },
  phoneNum: {
    type: Number
  },
  email: {
    type: String
  },
  birthday: {
    type: String
  },
  gender: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  zip: {
    type: Number
  },
  coffee: {
    type: String
  },
  quantity: {
    type: Number
  },
  size: {
    type: String
  },
  payment: {
    type: String
  },
}, {
  collection: 'orders'
})
module.exports = mongoose.model('Orders', ordersSchema)