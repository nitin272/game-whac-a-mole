
const finalScoreElement = document.getElementById('finalscore');
const finalScore = localStorage.getItem('finalScore');

if (finalScore) {
    finalScoreElement.textContent = finalScore;
}
const playAgainButton = document.getElementById('a');
playAgainButton.addEventListener('click', () => {
    window.location.href = 'game.html';
});
