var DayOneTwo;
(function (DayOneTwo) {
    var fs = require("fs");
    var content;
    fs.readFile("./input1.txt", "utf-8", function (err, data) {
        if (err)
            console.error(err);
        content = data;
        console.log(calculate());
    });
    function calculate() {
        var arr = content.split("\n").filter(function (el) { return parseInt(el); });
        var set = new Set([0]);
        var current = 0;
        var idx = 0;
        while (true) {
            var num = parseInt(arr[idx]) || 0;
            var next = current + num;
            if (set.has(next))
                return next;
            set.add(next);
            current = next;
            idx = (idx + 1) % arr.length;
        }
    }
})(DayOneTwo || (DayOneTwo = {}));
