
module.exports = {
  routes: [
    { // Path defined with a URL parameter
      method: 'POST',
      path: '/service-user/signIn',
      handler: 'custom-service-user.signIn',
    },
    { // Path defined with a URL parameter
      method: 'POST',
      path: '/service-user/createServiceUser',
      handler: 'custom-service-user.createServiceUser',
    }
  ]
}
