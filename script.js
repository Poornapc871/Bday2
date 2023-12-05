// script.js
document.addEventListener('DOMContentLoaded', function() {
    const surpriseText = document.getElementById('surprise-text');
    const birthdayMessage = document.querySelector('.birthday-message');

    // Function to reveal the surprise text
    function revealSurprise() {
        surpriseText.classList.remove('hidden');
        surpriseText.textContent = "🎉🎁 Happy Birthday, Akanksha! 🎂🥳";
        birthdayMessage.style.display = 'none';
    }

    // Event listener to reveal the surprise text on click
    surpriseText.addEventListener('click', revealSurprise);
});