// Dependencies
const { sampleHandler } = require('../routeHandlers/sampleHandlers');
const { userHandler } = require('../routeHandlers/userHandler');
const { tokenHandler } = require('../routeHandlers/tokenHandler');

const routes = {
    // route name : which function to hit
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
};

module.exports = routes;
