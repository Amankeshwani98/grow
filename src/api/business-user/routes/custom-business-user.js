module.exports = {
  routes: [
    { // Path defined with a URL parameter
      method: 'POST',
      path: '/business-user/signIn',
      handler: 'custom-business-user.signIn',
    },
    { // Path defined with a URL parameter
      method: 'POST',
      path: '/business-user/getBusiness',
      handler: 'custom-business-user.getBusiness',
    },
    { // Path defined with a URL parameter
      method: 'POST',
      path: '/business-user/createBusinessUser',
      handler: 'custom-business-user.createBusinessUser',
    }
  ]
}
