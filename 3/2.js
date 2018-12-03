var DayThreeTwo;
(function (DayThreeTwo) {
    var fs = require("fs");
    fs.readFile("./input.txt", "utf-8", function (err, data) {
        if (err)
            console.error(err);
        console.log(calculate(formatData(data)));
    });
    function calculate(data) {
        var FABRIC_SIZE = 1000;
        var fabric = Array.from(Array(FABRIC_SIZE), function () { return Array.from(Array(FABRIC_SIZE), function () { return 0; }); });
        for (var i = 0; i < data.length; i += 1) {
            var _a = data[i], x = _a[1], y = _a[2], width = _a[3], height = _a[4];
            for (var xIdx = x; xIdx < x + height; xIdx += 1) {
                for (var yIdx = y; yIdx < y + width; yIdx += 1) {
                    fabric[xIdx][yIdx] += 1;
                }
            }
        }
        for (var i = 0; i < data.length; i += 1) {
            var _b = data[i], id = _b[0], x = _b[1], y = _b[2], width = _b[3], height = _b[4];
            var hasOverlapped = false;
            for (var xIdx = x; xIdx < x + height; xIdx += 1) {
                if (hasOverlapped)
                    break;
                for (var yIdx = y; yIdx < y + width; yIdx += 1) {
                    if (fabric[xIdx][yIdx] !== 1) {
                        hasOverlapped = true;
                        break;
                    }
                }
            }
            if (!hasOverlapped)
                return id;
        }
        return 0;
    }
    function formatData(data) {
        var list = data.split("\n").filter(function (el) { return el; });
        return list.map(function (row) {
            var _a = row.split(" "), id = _a[0], topLeft = _a[2], size = _a[3];
            var _b = topLeft.slice(0, topLeft.length - 1).split(","), y = _b[0], x = _b[1];
            var _c = size.split("x"), width = _c[0], height = _c[1];
            var idNum = id.slice(1);
            return [idNum, x, y, width, height].map(function (el) { return parseInt(el); });
        });
    }
})(DayThreeTwo || (DayThreeTwo = {}));
