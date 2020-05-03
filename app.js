// Selectors
const cards = document.querySelectorAll('.memory-card');

// Event Listeners
memoryCard.forEach(card => {card.addEventListener('click', flipCard)});

// Functions
function flipCard(event) {
    this.classList.toggle('flip');
}

