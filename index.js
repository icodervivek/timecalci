const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
require('dotenv').config();


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    res.render("home")
})

app.post("/submitted", (req, res) => {
    const result = {
        firstnum: req.body.firstnum,
        secondnum: req.body.secondnum,
        thirdnum: req.body.thirdnum,
        fourthnum: req.body.fourthnum
    }

    const dataOne = result.firstnum;
    const dataTwo = result.secondnum;
    const dataThree = result.thirdnum;
    const dataFourth = result.fourthnum;

    const resultOne = `${parseFloat(dataOne)}.${parseFloat(dataTwo)}`;
    const resultTwo = `${parseFloat(dataThree)}.${parseFloat(dataFourth)}`
    const accurateResult = resultOne - resultTwo;

    res.render("parsed", {sums: parseFloat(accurateResult).toFixed(2)})
})


app.listen(process.env.PORT, () => {
    console.log(`Server is up and running...`);
})
