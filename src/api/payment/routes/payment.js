module.exports = {
  routes: [
    { // Path defined with a URL parameter
      method: 'POST',
      path: '/payment',
      handler: 'payment.createOrder',
    },
    {
      method: 'GET',
      path: '/payment/orders',
      handler: 'payment.getOrders',
    },
    {
      method: 'GET',
      path: '/payment/orders/:orderId',
      handler: 'payment.getOneOrder',
    },
    {
      method: 'POST',
      path: '/payment/:id/capture',
      handler: 'payment.capturePayment',
    },
    {
      method: 'GET',
      path: '/payments/:id',
      handler: 'payment.fetchPayment',
    },
    {
      method: 'GET',
      path: '/payments',
      handler: 'payment.fetchAllPayments',
    },

  ]
}
