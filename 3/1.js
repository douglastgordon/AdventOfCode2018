var DayThreeOne;
(function (DayThreeOne) {
    var fs = require("fs");
    fs.readFile("./input.txt", "utf-8", function (err, data) {
        if (err)
            console.error(err);
        console.log(calculate(formatData(data)));
    });
    function calculate(data) {
        var FABRIC_SIZE = 1000;
        var fabric = Array.from(Array(FABRIC_SIZE), function () { return Array.from(Array(FABRIC_SIZE), function () { return 0; }); });
        var overlaps = 0;
        data.forEach(function (_a) {
            var x = _a[0], y = _a[1], width = _a[2], height = _a[3];
            for (var xIdx = x; xIdx < x + height; xIdx += 1) {
                for (var yIdx = y; yIdx < y + width; yIdx += 1) {
                    if (fabric[xIdx][yIdx] === 1)
                        overlaps += 1;
                    fabric[xIdx][yIdx] += 1;
                }
            }
        });
        return overlaps;
    }
    function formatData(data) {
        var list = data.split("\n").filter(function (el) { return el; });
        return list.map(function (row) {
            var _a = row.split(" "), topLeft = _a[2], size = _a[3];
            var _b = topLeft.slice(0, topLeft.length - 1).split(","), y = _b[0], x = _b[1];
            var _c = size.split("x"), width = _c[0], height = _c[1];
            return [x, y, width, height].map(function (el) { return parseInt(el); });
        });
    }
})(DayThreeOne || (DayThreeOne = {}));
