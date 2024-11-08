import { randomNumberBetween } from "./lib/utils";

const funQuotes = [
    // This block of quotes is from https://www.tiktok.com/@kierenbrodnik/video/7347635927210118401
    "Try running to move faster...",
    "Got a headache? Try drinking water...",
    "Sleeping is easier when lights are turned off...",

    "If you are homeless just buy a house...",

    // Reddit
    "Fill your pockets, pouches and bags of holding with sand to confuse pickpockets",
    
    // The Witcher 3
    "When the time of the White Frost comes, do not eat the yellow snow",

    // Skyrim
    "Become friends with someone, and they may allow you to take certain items from their home",

    // own
    "Don't try to argue with a Karen, your stamina will quickly decrease",
];

const shuffleFunQuotes = () => {
    // const remainingQuotes = new Array(funQuotes.length).fill(null).map((v, i) => i);
    const remainingQuotes = [...funQuotes];
    return new Array(funQuotes.length).fill(null).map(() => {
        const quoteIndex = randomNumberBetween(0, remainingQuotes.length - 1);
        const quote = remainingQuotes[quoteIndex];
        remainingQuotes.splice(quoteIndex, 1);
        return quote;
    })
}

export { shuffleFunQuotes };