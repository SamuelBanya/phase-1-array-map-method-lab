const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// NOTE: The lab did NOT call for using a for loop, so I'll keep this as its own function for future reference:
const titleCasedForLoopVersion = () => {
    let modifiedTutorials = [ ];

    for (const tutorial of tutorials) {
        // console.log(`tutorial: ${tutorial}`);
        let modifiedTutorial = "";
        // Use .split() so we can split the entire string by spaces accordingly to grab each word:
        // MDN Docs page:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
        let words = tutorial.split(" ");
        // console.log(`words: ${words}`);
        for (const word of words) {
            // console.log(`word: ${word}`);
            let capitalWord = word[0].toUpperCase() + word.slice(1, word.length);
            // console.log(`capitalWord: ${capitalWord}`);
            modifiedTutorial = modifiedTutorial + capitalWord;
            modifiedTutorial += " ";
        }
        // Edge case:
        // Remove last space character of 'modifiedTutorial' to remove edge case of mystery last space character:
        modifiedTutorial = modifiedTutorial.slice(0, modifiedTutorial.length - 1);
        // modifiedTutorials += modifiedTutorial;
        modifiedTutorials.push(modifiedTutorial);
        console.log(`modifiedTutorial: ${modifiedTutorial}`);
        console.log(`modifiedTutorials: ${modifiedTutorials}`);
    }
    // return tutorials
    return modifiedTutorials;
}

// titleCasedForLoopVersion(tutorials);

const titleCased = () => {
    let modifiedTutorials = [ ];

    // First For Loop:
    // tutorials.map(tutorial => {
    // ...
    // })
    // Second For Loop:
    // words.map(word => {
    // ...
    // })    

    // for (const tutorial of tutorials) {
    tutorials.map(tutorial => {
        // console.log(`tutorial: ${tutorial}`);
        let modifiedTutorial = "";
        // Use .split() so we can split the entire string by spaces accordingly to grab each word:
        // MDN Docs page:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
        let words = tutorial.split(" ");
        // console.log(`words: ${words}`);
        // for (const word of words) {
        words.map(word => {
            // console.log(`word: ${word}`);
            let capitalWord = word[0].toUpperCase() + word.slice(1, word.length);
            // console.log(`capitalWord: ${capitalWord}`);
            modifiedTutorial = modifiedTutorial + capitalWord;
            modifiedTutorial += " "; });
        // Edge case:
        // Remove last space character of 'modifiedTutorial' to remove edge case of mystery last space character:
        modifiedTutorial = modifiedTutorial.slice(0, modifiedTutorial.length - 1);
        // modifiedTutorials += modifiedTutorial;
        modifiedTutorials.push(modifiedTutorial);
        console.log(`modifiedTutorial: ${modifiedTutorial}`);
        console.log(`modifiedTutorials: ${modifiedTutorials}`);
    });
    // return tutorials
    return modifiedTutorials;
}

console.log(`tutorials: ${tutorials}`);

titleCased(tutorials);
