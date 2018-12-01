var DayOneOne;
(function (DayOneOne) {
    var fs = require("fs");
    var content;
    fs.readFile("./input1.txt", "utf-8", function (err, data) {
        if (err)
            console.error(err);
        content = data;
        console.log(calculate());
    });
    function calculate() {
        var arr = content.split("\n");
        return arr.reduce(function (acc, num) {
            return acc + (parseInt(num) || 0);
        }, 0);
    }
})(DayOneOne || (DayOneOne = {}));
