const express = require("express");

const default_port = 3000;

const application = express();

application.get((request, response) =>
{
    response.send("<h1>Hello, world!</h1>");
});

const server = application.listen(default_port, () =>
{
    console.log(`Port: ${server.address().port}`);
});