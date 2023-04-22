module.exports = {
  routes: [
    { // Path defined with a URL parameter
      method: 'POST',
      path: '/agent/signIn',
      handler: 'custom-agent.signIn',
    },
    { // Path defined with a URL parameter
      method: 'POST',
      path: '/agent/createAgent',
      handler: 'custom-agent.createAgent',
    }
  ]
}
