const {createCoreController} = require('@strapi/strapi').factories;
const Razorpay = require('razorpay')
var instance = new Razorpay({
  key_id: 'rzp_test_9kvIruhUmBxx7r',
  key_secret: 'iHy6ud3cGw2IbISOJTD06QDV'
})

module.exports = {
  async createOrder(ctx, next) {
    let options = {
      amount: ctx.request.body.amount,
      currency: "INR",
      receipt: "receipt#1",
      notes: {
        key1: "value3",
        key2: "value2"
      }
    }
    var order = {}
    try {
      await instance.orders.create(options, (err, result) => {
        console.log("This is the order", result)
        console.log("ctx.res")
        ctx.response.send(result)
      })
    }
    catch (err) {
      console.log("The error is :", err)
    }

  },


  async getOrders(ctx,next){
    let orderId = ctx.body.orderId
    try {
      let orders = await instance.orders.all()
      console.log("orders are : ", orders)
      ctx.send(orders)
    }
    catch (err) {
      console.log("this is an error:",err)
    }
  },
  async getOneOrder(ctx,next){
    let orderId = ctx.params.orderId
    try {
      let order = await instance.orders.fetch(orderId)
      console.log("orders are : ", order)
      ctx.send(order)
    }
    catch (err) {
      console.log("Order Id does not exist",err)
    }
  },
  async capturePayment(ctx,next){
    let {amount,currency} = ctx.body
    let paymentId = ctx.params.id
    try {
      let order = instance.payments.capture(paymentId, amount, currency)
      console.log("orders are : ", order)
      ctx.send(order)
    }
    catch (err) {
      console.log("Order Id does not exist",err)
    }
  },

  async fetchPayment(ctx,next){
    let paymentId = ctx.params.id
    try {
      let order = instance.payments.fetch(paymentId)
      console.log("orders are : ", order)
      ctx.send(order)
    }
    catch (err) {
      console.log("Order Id does not exist",err)
    }
  },
  async fetchAllPayments(ctx,next){
    try {
      let order = instance.payments.all(option)
      console.log("orders are : ", order)
      ctx.send(order)
    }
    catch (err) {
      console.log("Order Id does not exist",err)
    }
  },

};
