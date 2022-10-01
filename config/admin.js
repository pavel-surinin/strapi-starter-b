module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    // crypto.randomBytes(16).toString('base64')
    salt: env('API_TOKEN_SALT'),
  },
});
