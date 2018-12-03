namespace DayThreeTwo {
    const fs = require("fs");

    fs.readFile("./input.txt", "utf-8", (err: any, data: any) => {
        if (err) console.error(err);
        console.log(calculate(formatData(data)));
    });

    function calculate(data: number[][]): number {
        const FABRIC_SIZE = 1000
        const fabric: number[][] = Array.from(Array(FABRIC_SIZE), () => Array.from(Array(FABRIC_SIZE), () => 0));

        for (let i = 0; i < data.length; i += 1) {
            const [, x, y, width, height] = data[i]
            for (let xIdx = x; xIdx < x + height; xIdx += 1) {
                for (let yIdx = y; yIdx < y + width; yIdx += 1) {
                    fabric[xIdx][yIdx] += 1;
                }
            }
        }

        for (let i = 0; i < data.length; i += 1) {
            const [id, x, y, width, height] = data[i]
            let hasOverlapped = false;
            for (let xIdx = x; xIdx < x + height; xIdx += 1) {
                if (hasOverlapped) break;
                for (let yIdx = y; yIdx < y + width; yIdx += 1) {
                    if (fabric[xIdx][yIdx] !== 1) { 
                        hasOverlapped = true; 
                        break;
                    }
                }
            }
            if (!hasOverlapped) return id;
        }

        return 0;
    }

    function formatData(data: string): number[][] {
        const list: Array<string> = data.split("\n").filter((el: string) => el);
        return list.map(row => {
            const [id, , topLeft, size] = row.split(" ");
            const [y, x] = topLeft.slice(0, topLeft.length - 1).split(",");
            const [width, height] = size.split("x");
            const idNum = id.slice(1);
            return [idNum, x, y, width, height].map((el: string) => parseInt(el));
        });

    }
}