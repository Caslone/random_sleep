const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function generateRandomWord() {
    const wordContainer = document.getElementById('word-container');
    wordContainer.textContent = getRandomWord();
}
