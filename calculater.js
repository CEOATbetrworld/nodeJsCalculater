const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The sum of two mumber you entered is " + result);



})

app.listen(3000, function () {
    console.log("server started on port 3000");
})

app.get("/bmicalculater", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculater.html")
})

app.post("/bmicalculater", function (req, res) {

    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var heightInSqMeters = Math.pow((height / 100), 2);

    var bmi = weight / heightInSqMeters;

    res.send("Your BMI is " + bmi);

})