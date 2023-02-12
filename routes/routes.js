// dependencies
const { sampleHandler } = require('../routeHandlers/sampleHandlers');
const { userHandler } = require('../routeHandlers/userHandler');
const { tokenHandler } = require('../routeHandlers/tokenHandler');
const { checkHandler } = require('../routeHandlers/checkHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
    check: checkHandler,
};

module.exports = routes;