/*user says yes*/
document.addEventListener('DOMContentLoaded', () => {
    const jsConfetti = new JSConfetti();
    const yesButton = document.getElementById('yesButton');

    function blowConfetti() {
        jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸', '🎉', '🌟', '🍭', '🌼', '💖', '🦄'],
            emojiSize: 70,
            confettiNumber: 100,
        });
    }

    if (yesButton) {
        yesButton.addEventListener('click', blowConfetti);
    } else {
        console.error('Yes button not found!');
    }
/*user says no...and why tf would they say no*/
const noButton = document.getElementById('noButton');
const noImage = document.getElementById('noImage');

    if (noButton && noImage) {
        noButton.addEventListener('click', () => {
            noImage.classList.add('show-image');
        });
    } else {
        console.error('hidden image not found');
        }
});

/*event listening*/
