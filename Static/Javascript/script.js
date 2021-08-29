// add event listeners to flip cards
let cards = document.getElementsByClassName('tech');

for (const card of cards) {
    card.addEventListener('click', () => card.classList.toggle('is-flipped'));  
};

// add event listener to show all logs

let showLogo = document.getElementById('showLogo');

showLogo.addEventListener('click', () =>  {
    for (const card of cards) {
        if (!(card.classList.contains('is-flipped')) & (!(card.classList.contains('show-logo')))) 
        card.classList.toggle('is-flipped');
    };
});

// add event listener to show all cards

let showCards = document.getElementById('showCards');

showCards.addEventListener('click', () => {
    for (const card of cards) {
        if (card.classList.contains('is-flipped') &  (!(card.classList.contains('show-logo'))))
        card.classList.toggle('is-flipped');        
    };
});