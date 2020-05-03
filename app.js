// Selectors
const cards = document.querySelectorAll('.memory-card');

// Event Listeners
cards.forEach(card => card.addEventListener('click', flipCard));

// Variable
let hasFlippedCard = false;
let firstCard, secondCard;

// Functions
function flipCard(event) {
    // Add 'flip' class on click
    this.classList.add('flip');

    if (!hasFlippedCard) {
        // If first click
        hasFlippedCard = true;
        firstCard = this;
    }

    else {
        // If second click
        hasFlippedCard = false;
        secondCard = this;

        // // console.log(firstCard.dataset.framework, secondCard.dataset.framework);
        // console.log(firstCard, secondCard);


        // Do the cards match?
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            // It's a match!!
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        }
        else {
            // Not a match
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1500); // Delay to see the flipping
        }
    }
}

