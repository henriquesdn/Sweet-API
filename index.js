const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

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

    if(!body){
        return res.status(400).end();
    };

    dummyData.push(body);

    return res.json(body);
});

app.listen(2001, () => {
    console.log("Express started at http://localhost:2001");
});