module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6574e73632fb0b9d923318f640defaf2'),
  },
});
