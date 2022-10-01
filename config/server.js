module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['test1', 'test2'],
    // keys: env.array('APP_KEYS'),
  },
});
