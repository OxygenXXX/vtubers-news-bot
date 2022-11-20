const express = require("express");

const default_port = 3000;

const application = express();

const server = application.listen(default_port, () =>
{
    console.log(`Port: ${server.address().port}`);
});