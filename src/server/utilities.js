//convertToRoman takes a whole number 1-3999 and returns its equivalent roman numeral
//returns the string "error" on bad input
export function convertToRoman(n) {
    //Ensures input is a whole number 1-3999
    if (typeof n !== 'number' || n < 1 || n > 3999 || n % 1 !== 0) {
        return 'error'
    }

    //numeralTable is an ordered array, where the 0th
    //  element represents the arabic numbers ones column,
    //  the 1st element represents the tens column, and so
    //  forth.
    const numeralTable = [
        {
            unit: 'I',
            pentaUnit: 'V',
        },
        {
            unit: 'X',
            pentaUnit: 'L'
        },
        {
            unit: 'C',
            pentaUnit: 'D'
        },
        {
            unit: 'M'
        },
    ]

    //Column values is an array of the numerical values of the numbers
    //  columns ("ones", "tens", "hundreds", etc), starting with the smallest
    const columnValues =  String(n).split('').map((s) => parseInt(s)).reverse()
    //romanStringParts is an array of our final answer that will have to be
    //  reversed and concatenated after we are done with our for loop
    let romanStringParts = []

    //Process each numbers column in columnValues and turn it into its roman
    //  equivalent. Individual considerations are given for 0-3, 4, 5-8, and 9.
    //  numeralTable is used to determine what roman equivalents are used for
    //  what numbers column.
    for (let i = 0; i < columnValues.length; i++) {
        if (columnValues[i] > 0 && columnValues[i] < 4) {
            for (let j = 0; j < columnValues[i]; j++) {
                romanStringParts.push(numeralTable[i].unit)
            }
        } else if (columnValues[i] === 4) {
            romanStringParts.push(numeralTable[i].unit + numeralTable[i].pentaUnit)
        } else if (columnValues[i] >= 5 && columnValues[i] <= 8) {
            let afterPentaValue = columnValues[i] - 5
            for (let j = 0; j < afterPentaValue; j++) {
                romanStringParts.push(numeralTable[i].unit)
            }
            romanStringParts.push(numeralTable[i].pentaUnit)
        } else if (columnValues[i] === 9) {
            romanStringParts.push(numeralTable[i].unit + numeralTable[i + 1].unit)
        }
    }

    return romanStringParts.reverse().join('')
}

// As explained in README, I've included this AI generated function here, and may
//   use it in a future commit.
export function aiToRoman(num) {
    if (num < 1 || num > 3999) {
        throw new Error("Input must be between 1 and 3999.");
    }

    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = '';

    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            num -= romanNumerals[i].value;
        }
    }

    return result;
}
