// Dependencies
const { sampleHandler } = require('../handlers/routeHandlers/sampleHandlers');
const { userHandler } = require('../handlers/routeHandlers/userHandler');
const { tokenHandler } = require('../handlers/routeHandlers/tokenHandler');

const routes = {
    // route name : which function to hit
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
};

module.exports = routes;
