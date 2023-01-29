// Dependencies
const { sampleHandler } = require('../handlers/routeHandlers/sampleHandlers');
const { userHandler } = require('../handlers/routeHandlers/userHandler');

const routes = {
    // route name : which function to hit
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;
