const express = require('express');

const port = 5000;

const app = express();

app.get('/', (req, res, next) => {
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

app.listen(port);