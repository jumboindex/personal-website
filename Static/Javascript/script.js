// add event listeners to flip cards

const cards = document.getElementsByClassName('tech');

for (const card of cards) {
    card.addEventListener('click', () => card.classList.toggle('is-flipped'));  
};

// add event listener to show all logs

const showLogo = document.getElementById('showLogo');

showLogo.addEventListener('click', () =>  {
    for (const card of cards) {
        if (!(card.classList.contains('is-flipped')) & (!(card.classList.contains('show-logo')))) 
        card.classList.toggle('is-flipped');
    };
});

// add event listener to show all cards

const showCards = document.getElementById('showCards');

showCards.addEventListener('click', () => {
    for (const card of cards) {
        if (card.classList.contains('is-flipped') & (!(card.classList.contains('show-logo'))))
        card.classList.toggle('is-flipped');        
    };
});

// mobile menu event listeners 

const hamburgerIcon = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile-menu');

// open mobile menu

hamburgerIcon.addEventListener('click', () => {
    mobileMenu.style.display = "block";
});
// close mobile menu

const closeButton = document.getElementById('closebtn');

closeButton.addEventListener('click', () => {
    mobileMenu.style.display = "none";
});
// close mobile menu when anchor tags clicked

const mobileAnchors = document.getElementsByClassName('mobile-anchor')

for (const link of mobileAnchors) {
    link.addEventListener('click', () => {
        mobileMenu.style.display = "none";
    })
};

// filter project cards functions 

function filterProjects (filter) {
    const projectList = document.getElementsByClassName('project-card');

    for (const project of projectList) {
        let classStr = project.className;
        if (filter == "showAll") project.style.display = 'flex';
        else if (classStr.indexOf(filter) > -1) project.style.display ='flex';
        else project.style.display = 'none';
    };
 };

// create button event handerlers
const arrBtn = ['showAll', 'node', 'react', 'fullstack'];

arrBtn.forEach( button => {
    document.getElementById(button).addEventListener('click', () => filterProjects(button));
});
