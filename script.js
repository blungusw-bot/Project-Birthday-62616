const dateInput = document.getElementById('dateInput');
const submitBtn = document.getElementById('submitBtn');
const imageContainer = document.getElementById('imageContainer');

// Create audio element for wrong answer sound
const wrongSound = new Audio('wrong.mp3');

submitBtn.addEventListener('click', checkDate);
dateInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkDate();
    }
});

function checkDate() {
    const inputValue = dateInput.value.trim();
    const correctDate = '4/28/1973';

    if (inputValue === correctDate) {
        // Show the image
        imageContainer.classList.remove('hidden');
    } else {
        // Play sound and clear input
        wrongSound.play();
        dateInput.value = '';
        imageContainer.classList.add('hidden');
    }
}
