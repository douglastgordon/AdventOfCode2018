var DayTwoTwo;
(function (DayTwoTwo) {
    var fs = require("fs");
    fs.readFile("./input1.txt", "utf-8", function (err, data) {
        if (err)
            console.error(err);
        console.log(calculate(formatData(data)));
    });
    function formatData(data) {
        return data.split("\n").filter(function (el) { return el; });
    }
    function calculate(data) {
        var _a = oneApart(data), strA = _a[0], strB = _a[1];
        return commonLetters(strA, strB);
    }
    function commonLetters(a, b) {
        var result = "";
        for (var i = 0; i < a.length; i += 1) {
            if (a[i] === b[i])
                result += a[i];
        }
        return result;
    }
    function oneApart(data) {
        for (var i = 0; i < data.length - 1; i += 1) {
            for (var j = i + 1; j < data.length; j += 1) {
                if (isOneApart(data[i], data[j]))
                    return [data[i], data[j]];
            }
        }
        return ["", ""];
    }
    function isOneApart(a, b) {
        var differences = 0;
        for (var i = 0; i < a.length; i += 1) {
            if (a[i] !== b[i])
                differences += 1;
            if (differences > 1)
                return false;
        }
        return true;
    }
})(DayTwoTwo || (DayTwoTwo = {}));
