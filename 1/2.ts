namespace DayOneTwo {
    const fs = require("fs");

    let content: string

    fs.readFile("./input1.txt", "utf-8", (err: any, data: any) => {
        if (err) console.error(err)
        content = data;
        console.log(calculate());
    });

    function calculate(): number {
        const arr: ReadonlyArray<string> = content.split("\n").filter(el => parseInt(el));
        const set = new Set([0]);
        let current: number = 0
        let idx: number = 0
        while (true) {
            const num: number = parseInt(arr[idx]) || 0
            const next: number = current + num
            if (set.has(next)) return next
            set.add(next)
            current = next
            idx = (idx + 1) % arr.length
        }
    }
}
