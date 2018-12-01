namespace DayOneOne {
    const fs = require("fs");

    let content: any

    fs.readFile("./input1.txt", "utf-8", (err: any, data: any) => {
        if (err) console.error(err);
        content = data;
        console.log(calculate());
    });

    function calculate(): number {
        const arr = content.split("\n");
        return arr.reduce((acc: number, num: string) => {
            return acc + (parseInt(num) || 0);
        }, 0);
    }
}
