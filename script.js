const quotes = [
    "The game is afoot.",
    "Elementary, my dear Watson.",
    "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    "I never guess. It is a capital mistake to theorize before one has data.",
    "You see, but you do not observe.",
    "The world is full of obvious things which nobody by any chance ever observes.",
    "It is a great thing to start life with a small number of really good books which are your very own.",
    "The little things are infinitely the most important.",
    "There is nothing more deceptive than an obvious fact.",
    "I am a brain, Watson. The rest of me is a mere appendix.",
    "It is my business to know what other people don't know.",
    "You have a grand gift for silence, Watson. It makes you quite invaluable as a companion.",
    "To a great mind, nothing is little.",
    "I am not the law, but I represent justice so far as my feeble powers go.",
    "Education never ends, Watson. It is a series of lessons with the greatest for the last.",
    "The emotional qualities are antagonistic to clear reasoning.",
    "It is a mistake to confound strangeness with mystery.",
    "I can see nothing, said I, handing it back to my friend. On the contrary, Watson, you can see everything. You fail, however, to reason from what you see.",
    "We balance probabilities and choose the most likely. It is the scientific use of the imagination.",
    "There is no part of the body which varies so much as the human ear.",
    "You know my method. It is founded upon the observation of trifles.",
    "There is nothing more stimulating than a case where everything goes against you.",
    "It has long been an axiom of mine that the little things are infinitely the most important.",
    "What one man can invent another can discover.",
    "You know a conjurer gets no credit when once he has explained his trick.",
    "We can't command our love, but we can our actions.",
    "Where there is no imagination there is no horror.",
    "Detection is, or ought to be, an exact science and should be treated in the same cold and unemotional manner.",
    "It is quite a three pipe problem, and I beg that you won't speak to me for fifty minutes.",
    "A client is to me a mere unit, a factor in a problem.",
    "My name is Sherlock Holmes. It is my business to know what other people don't know.",
    "Crime is common. Logic is rare. Therefore it is upon the logic rather than upon the crime that you should dwell.",
    "I am not retained by the police to supply their deficiencies.",
    "I am an omnivorous reader with a strangely retentive memory for trifles.",
    "It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.",
    "Mediocrity knows nothing higher than itself; but talent instantly recognizes genius.",
    "Violence does, in truth, recoil upon the violent, and the schemer falls into the pit which he digs for another.",
    "The temptation to form premature theories upon insufficient data is the bane of our profession.",
    "There are no crimes and no criminals in these days. What is the use of having brains in our profession? I know well that I have it in me to make my name famous. No man lives or has ever lived who has brought the same amount of study and of natural talent to the detection of crime which I have done.",
    "The press, Watson, is a most valuable institution, if you only know how to use it.",
    "It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.",
    "The lowest and vilest alleys in London do not present a more dreadful record of sin than does the smiling and beautiful countryside.",
    "The main thing with people of that sort is never to let them think that their information can be of the slightest service to you.",
    "The love of books is among the choicest gifts of the gods.",
    "The work of a detective, in fact, is very largely the work of the footman.",
    "The chief proof of man's real greatness lies in his perception of his own smallness.",
    "There are always some lunatics about. It would be a dull world without them.",
    "The grand thing is to be able to reason backwards.",
    "There is no branch of detective science which is so important and so much neglected as the art of tracing footsteps.",
    "When a doctor does go wrong, he is the first of criminals. He has nerve and he has knowledge.",
    "The lowest and vilest alleys in London do not present a more dreadful record of sin than does the smiling and beautiful countryside.",
    "One should always look for a possible alternative and provide against it. It is the first rule of criminal investigation.",
    "You know, my dear Watson, that I love all that is bizarre and outside the conventions and humdrum routine of everyday life.",
    "Some facts should be suppressed, or at least a just sense of proportion should be observed in treating them.",
    "Detection is, or ought to be, an exact science, and should be treated in the same cold and unemotional manner.",
    "It is a mistake to confound strangeness with mystery.",
    "The most winning woman I ever knew was hanged for poisoning three little children for their insurance-money.",
    "I never make exceptions. An exception disproves the rule.",
    "I never remember feeling tired by work, though idleness exhausts me completely.",
    "The past and the present are within the field of my inquiry, but what a man may do in the future is a hard question to answer.",
    "There is nothing new under the sun. It has all been done before.",
    "You see, but you do not observe. The distinction is clear.",
    "We must look for consistency. Where there is a want of it we must suspect deception.",
    "There is nothing more stimulating than a case where everything goes against you.",
    "There is no part of the body which varies so much as the human ear.",
    "It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.",
    "The temptation to form premature theories upon insufficient data is the bane of our profession.",
    "We must look for consistency. Where there is a want of it we must suspect deception.",
    "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    "There is nothing more deceptive than an obvious fact.",
    "One should always look for a possible alternative and provide against it. It is the first rule of criminal investigation.",
    "I have frequently gained my first real insight into the character of parents by studying their children.",
    "There is nothing more stimulating than a case where everything goes against you.",
    "Education never ends, Watson. It is a series of lessons with the greatest for the last.",
    "It is a mistake to confound strangeness with mystery.",
    "I can see nothing, said I, handing it back to my friend. On the contrary, Watson, you can see everything. You fail, however, to reason from what you see.",
    "We balance probabilities and choose the most likely. It is the scientific use of the imagination.",
    "The world is full of obvious things which nobody by any chance ever observes.",
    "I am a brain, Watson. The rest of me is a mere appendix.",
    "It is my business to know what other people don't know.",
    "You have a grand gift for silence, Watson. It makes you quite invaluable as a companion.",
    "To a great mind, nothing is little.",
    "I am not the law, but I represent justice so far as my feeble powers go.",
    "The emotional qualities are antagonistic to clear reasoning.",
    "The world is full of obvious things which nobody by any chance ever observes.",
    "There is nothing more deceptive than an obvious fact.",
    "You know my method. It is founded upon the observation of trifles.",
    "I am not retained by the police to supply their deficiencies.",
    "I am an omnivorous reader with a strangely retentive memory for trifles.",
    "It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.",
    "Mediocrity knows nothing higher than itself; but talent instantly recognizes genius.",
    "Violence does, in truth, recoil upon the violent, and the schemer falls into the pit which he digs for another.",
    "The press, Watson, is a most valuable institution, if you only know how to use it."
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