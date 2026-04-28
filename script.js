const dateInput = document.getElementById('dateInput');
const submitBtn = document.getElementById('submitBtn');
const imageContainer = document.getElementById('imageContainer');

// Create audio elements
const wrongSound = new Audio('wrong.mp3');
const correctSound = new Audio('correct.mp3');

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
        // Show the image and play correct sound
        imageContainer.classList.remove('hidden');
        correctSound.play();
    } else {
        // Play wrong sound and clear input
        wrongSound.play();
        dateInput.value = '';
        imageContainer.classList.add('hidden');
    }
}
