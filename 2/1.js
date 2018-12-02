var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var DayTwoOne;
(function (DayTwoOne) {
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
        var _a = data.reduce(function (_a, id) {
            var runningTwoCount = _a[0], runningThreeCount = _a[1];
            var _b = getTotals(id), currentTwoTotal = _b[0], currentThreeTotal = _b[1];
            return [runningTwoCount + currentTwoTotal, runningThreeCount + currentThreeTotal];
        }, [0, 0]), twoCount = _a[0], threeCount = _a[1];
        return twoCount * threeCount;
    }
    function getTotals(id) {
        var frequencyHash = getLetterFrequency(id);
        var values = Object.values(frequencyHash);
        var hasTwo = false;
        var hasThree = false;
        for (var i = 0; i < values.length; i += 1) {
            var value = values[i];
            if (hasTwo && hasThree)
                return [1, 1];
            if (value === 2)
                hasTwo = true;
            if (value === 3)
                hasThree = true;
        }
        return [hasTwo ? 1 : 0, hasThree ? 1 : 0];
    }
    function getLetterFrequency(str) {
        return str.split("").reduce(function (acc, letter) {
            var _a;
            return __assign({}, acc, (_a = {}, _a[letter] = (acc[letter] || 0) + 1, _a));
        }, {});
    }
})(DayTwoOne || (DayTwoOne = {}));
