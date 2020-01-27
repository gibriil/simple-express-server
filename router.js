import express from 'express';
import {
    router as TEST_ROUTE
} from './routes/test.route.js';
import {
    router as ADMIN_ROUTE
} from './routes/admin.route.js';

export const router = express.Router();

router.use('/test', TEST_ROUTE);

router.use('/admin', ADMIN_ROUTE);

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