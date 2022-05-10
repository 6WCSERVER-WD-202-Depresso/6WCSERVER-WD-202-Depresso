const express = require('express');
const ordersRoute = express.Router();
// model
let OrdersModel = require('../models/Orders');
ordersRoute.route('/create-student').post((req, res, next) => {
  OrdersModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
ordersRoute.route('/').get((req, res, next) => {
    OrdersModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
 ordersRoute.route('/edit-student/:id').get((req, res, next) => {
   OrdersModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update
ordersRoute.route('/update-student/:id').put((req, res, next) => {
  OrdersModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Orders successfully updated!')
    }
  })
})
// Delete
ordersRoute.route('/delete-student/:id').delete((req, res, next) => {
  OrdersModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = ordersRoute;