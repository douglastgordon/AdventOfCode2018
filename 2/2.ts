namespace DayTwoTwo {
    const fs = require("fs");

    fs.readFile("./input1.txt", "utf-8", (err: any, data: any) => {
        if (err) console.error(err);
        console.log(calculate(formatData(data)));
    });

    function formatData(data: string): Array<string> {
        return data.split("\n").filter(el => el);
    }

    function calculate(data: Array<string>): string {
        const [strA, strB] = oneApart(data);
        return commonLetters(strA, strB);
    }

    function commonLetters(a: string, b: string): string {
        let result: string = "";
        for (let i = 0; i < a.length; i += 1) {
            if (a[i] === b[i]) result += a[i];
        }
        return result;
    }

    function oneApart(data: Array<string>): [string, string] {
        for (let i = 0; i < data.length - 1; i += 1) {
            for (let j = i + 1; j < data.length; j += 1) {
                if (isOneApart(data[i], data[j])) return [data[i], data[j]];
            }
        }
        return ["", ""];
    }

    function isOneApart(a: string, b: string): boolean {
        let differences = 0;
        for (let i = 0; i < a.length; i += 1) {
            if (a[i] !== b[i]) differences += 1;
            if (differences > 1) return false;
        }
        return true;
    }
}
