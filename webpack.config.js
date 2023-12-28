const Dotenv = require('dotenv-webpack');

// eslint-disable-next-line no-undef
module.exports = {
  // ...
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ],
};
