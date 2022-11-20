const express = require("express");
const datetime = require("node-datetime");

const default_port = 3000;

const application = express();

application.use((request, response, next) =>
{
    const timestamp = datetime.create();

    console.log(`Time: ${timestamp.format("Y-m-d H:M:S")}`);
});

application.get("/", (request, response) =>
{
    response.send("<h2>Hello, world!</h2>");
});

const server = application.listen(default_port, () =>
{
    console.log(`Port: ${server.address().port}`);
});