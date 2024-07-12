const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
    'The world is full of obvious things which nobody by any chance ever observes.',
    'It is a capital mistake to theorize before one has data.',
    'Crime is common. Logic is rare. Therefore it is upon the logic rather than upon the crime that you should dwell.',
    'You see, but you do not observe. The distinction is clear.',
    'It has long been an axiom of mine that the little things are infinitely the most important.',
    'Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.',
    'Data! Data! Data! he cried impatiently. I cant make bricks without clay.',
    'The curious incident of the dog in the night-time.',
    'We balance probabilities and choose the most likely. It is the scientific use of the imagination.',
    'police remember when vivid tackle dont turn me to the me old forgot about dre message one morning dark walk it call the god gas matches local enough.',
    'To a great mind, nothing is little but against average never left document through make dad vest belt and moses will be here late night wall plaquqes back house you better.'
];

//store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
//starting time
let startTime = Date.now();
//grab UI elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

//adding the start logic
document.getElementById('start').addEventListener('click', () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split(' ');
    wordIndex = 0;

    //creating the quote html
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    quoteElement.innerHTML = spanWords.join('');
    quoteElement.childNodes[0].className = 'highlight';

    //clearing any prior messages
    messageElement.innerText = '';

    //set up the textbox and clear
    typedValueElement.value = '';
    typedValueElement.focus();

    //set the time
    startTime = new Date().getTime();
});

//event listener for typing
typedValueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length - 1) {
        //end of quote
        const elapsedTime = new Date().getTime() - startTime;
        const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
        messageElement.innerText = message;
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        //end of word
        typedValueElement.value = '';
        wordIndex++;
        //reset the class name for all elements in quote
        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = '';
        }
        //highlight the new word
        quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
        //currently correct
        typedValueElement.className = '';
    } else {
        //incorrect
        typedValueElement.className = 'error';
    }
});