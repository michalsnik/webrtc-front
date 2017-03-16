module.exports = function(env) {
  var ENV = {
    PORT: 3000,
  };

  if (env === 'production') {
    // ENV.PORT = 3000;
  }

  return ENV;
};
