// Dependencies
const { sampleHandler } = require('../handlers/routeHandlers/sampleHandlers');

const routes = {
    // route name : which function to hit
    sample: sampleHandler,
};

module.exports = routes;
