module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/dashboard',
      handler: 'dashboard.search',
    },
    {
      method: 'GET',
      path: '/verify',
      handler: 'dashboard.verifyToken',
    },
  ]
}
