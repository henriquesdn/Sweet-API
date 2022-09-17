const express = require("express");
const routes = express.Router();

let dummyData = [
    { "1": { Name: "Joao", Age: "20" } },
    { "2": { Name: "Jose", Age: "18" } },
    { "3": { Name: "Maria", Age: "22" } },
];

routes.get("/", (req, res) => {
    return res.json(dummyData)
});

routes.post("/add", (req, res) => {
    const body = req.body;

    if(!body)
        return res.status(400).end();

    dummyData.push(body);

    return res.json(body);
});

routes.delete("/:id", (req, res) => {
    const id = req.params.id;

    let newDB = dummyData.filter(item => {
        if(!item[id])
            return item;
    });

    dummyData = newDB;

    return res.send(newDB);
});

module.exports = routes;