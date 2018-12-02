namespace DayTwoOne {
    const fs = require("fs");

    fs.readFile("./input1.txt", "utf-8", (err: any, data: any) => {
        if (err) console.error(err);
        console.log(calculate(formatData(data)));
    });

    function formatData(data: string): Array<string> {
        return data.split("\n").filter(el => el);
    }

    function calculate(data: Array<string>): number {
        const [twoCount, threeCount] = data.reduce(([runningTwoCount, runningThreeCount], id: string) => {
            const [currentTwoTotal, currentThreeTotal] = getTotals(id);
            return [runningTwoCount + currentTwoTotal, runningThreeCount + currentThreeTotal];
        }, [0, 0])
        return twoCount * threeCount;
    }

    function getTotals(id: string): [number, number] {
        const frequencyHash: object = getLetterFrequency(id);
        const values: Array<number> = Object.values(frequencyHash);
        let hasTwo: boolean = false;
        let hasThree: boolean = false;
        for (let i = 0; i < values.length; i += 1) {
            const value: number = values[i];
            if (hasTwo && hasThree) return [1, 1];
            if (value === 2) hasTwo = true;
            if (value === 3) hasThree = true;
        }
        return [hasTwo ? 1 : 0, hasThree ? 1 : 0];
    }

    interface LetterFrequency {
        [key: string]: number;
    }

    function getLetterFrequency(str: string): object {
        return str.split("").reduce((acc: LetterFrequency, letter: string): LetterFrequency => {
            return {...acc, [letter]: (acc[letter] || 0) + 1}
        }, {});
    }
}
