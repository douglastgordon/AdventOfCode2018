namespace DayThreeOne {
    const fs = require("fs");

    fs.readFile("./input.txt", "utf-8", (err: any, data: any) => {
        if (err) console.error(err);
        console.log(calculate(formatData(data)));
    });

    function calculate(data: number[][]): number {
        const FABRIC_SIZE = 1000
        const fabric: number[][] = Array.from(Array(FABRIC_SIZE), () => Array.from(Array(FABRIC_SIZE), () => 0));
        let overlaps = 0;
        data.forEach(([x, y, width, height]) => {
            for (let xIdx = x; xIdx < x + height; xIdx += 1) {
                for (let yIdx = y; yIdx < y + width; yIdx += 1) {
                    if (fabric[xIdx][yIdx] === 1) overlaps += 1;
                    fabric[xIdx][yIdx] += 1;
                }
            }
        })
        return overlaps;
    }

    function formatData(data: string): number[][] {
        const list: Array<string> = data.split("\n").filter((el: string) => el);
        return list.map(row => {
            const [ , , topLeft, size] = row.split(" ");
            const [y, x] = topLeft.slice(0, topLeft.length - 1).split(",");
            const [width, height] = size.split("x");
            return [x, y, width, height].map((el: string) => parseInt(el));
        });

    }
}