const express = require('express');
const router = express.Router();
const TEST_ROUTE = require('./routes/test.route.js');

router.use('/test', TEST_ROUTE);

router.use('/api', (req, res, next) => {
    res.jsonp({
        key1: "value 1",
        key2: "value 2",
        key3: "value 3"
    });
});

router.get('/', (req, res, next) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Simple Express Server</title>
            </head>
            <body>
                <h1>Welcome to this Simple Express.js Node Server</h1>
            </body>
        </html>
    `);
});

module.exports = router;