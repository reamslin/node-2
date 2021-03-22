function timeWord(str) {
    let hour = +str.slice(0,2);
    const minutes = str.slice(3);
    let time = "";

    const numToWordHour = {
        0: "twelve",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve"
    }

    // special cases: noon and midnight

    if (minutes === "00") {
        if (hour === 12) { return "noon" }
        if (hour === 0) { return "midnight" }
    }

    // non special cases
    const ampm = (hour >= 12) ? "pm" : "am";
    //make up for 24 hour time
    if (ampm == "pm") {
        hour = hour - 12;
    }

    time = numToWordHour[hour] + " " + numToWordMinutes(minutes) + " " + ampm

    return time;
}

function numToWordMinutes(minutes) {

    const digits = {
        0: "",
        1: " one",
        2: " two",
        3: " three",
        4: " four",
        5: " five",
        6: " six",
        7: " seven",
        8: " eight",
        9: " nine"
    }

    const teens = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    }

    const doubles = {
        2: "twenty",
        3: "thirty",
        4: "fourty",
        5: "fifty"
    }

    switch (true){
        case (+minutes === 0): 
            return "o'clock";
        case (+minutes < 10):
            return "oh" + digits[+minutes];
        case (+minutes < 20):
            return teens[+minutes];
        default:
            const tens = minutes.slice(0,1);
            const ones = minutes.slice(1);
            return doubles[tens] + digits[ones];
    }
}

module.exports = timeWord;