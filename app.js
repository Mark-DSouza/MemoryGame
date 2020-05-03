// Selectors
const cards = document.querySelectorAll('.memory-card');

// Event Listeners
cards.forEach(card => card.addEventListener('click', flipCard));

// Variable
    let hasFlippedCard = false;
    let firstCard, secondCard;
    let lockBoard = false;  // To prevent user from breaking logic by clicking during un-flip

// Functions
function flipCard(event) {
    if (lockBoard) return;

    if (this === firstCard) return; // To prevent user from double clicking on a card

    // Add 'flip' class on click
    this.classList.add('flip');

    if (!hasFlippedCard) {
        // If first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // If second click
    hasFlippedCard = false;
    secondCard = this;
        // Do the cards match?
        checkForMatch();

}

function checkForMatch() {
    const isMatch = (firstCard.dataset.framework === secondCard.dataset.framework);
    isMatch ? 
        disableCards() // It's a match!!
            :
        unflipCards() // Not a match
    ;
    
    /************************************************************************
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            // It's a match!!
            disableCards();
        }
        else {
            // Not a match
            unflipCards();
        }
    **************************************************************************/
}

function disableCards() {
    // Removes event listeners from the cards so that they are disabled
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}


function unflipCards() {
    lockBoard = true;

    // Removes flip class from the cards so that they un-flip
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500); // Delay to see the flipping
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false,false];
    [firstCard, secondCard] = [null, null];
}
