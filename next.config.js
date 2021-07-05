
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['hL9XzmDGBLTNUUBtpXmGS3'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  