// dependencies
const crypto = require('crypto');
const environments = require('./environments');

// module scaffolding
const utilities = {};

// Parse json to string (making object)
utilities.parseJSON = (jsonString) => {
    let output;
    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }

    return output;
};

// hashing password
utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        console.log(environments, process.env.NODE_ENV);
        const hash = crypto.createHmac('sha256', environments.secretKey).update(str).digest('hex');
        return hash;
    }
    return false;
};

// export module
module.exports = utilities;
