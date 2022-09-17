const express = require("express");
const routes = express.Router();

let dummyData = [
    { "Cliente1": { Name: "Joao", Age: "20" } },
    { "Cliente2": { Name: "Jose", Age: "18" } },
    { "Cliente3": { Name: "Maria", Age: "22" } },
];

app.get("/", (req, res) => {
    return res.json(dummyData)
});

app.post("/add", (req, res) => {
    const body = req.body;

    if(!body)
        return res.status(400).end();

    dummyData.push(body);

    return res.json(body);
});

module.exports = routes;