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
        if (card.classList.contains('is-flipped') & (!(card.classList.contains('show-logo'))))
        card.classList.toggle('is-flipped');        
    };
});

// mobile menu event listeners 

let hamburgerIcon = document.getElementById('hamburger')
let mobileMenu = document.getElementById('mobile-menu');

// open mobile menu

hamburgerIcon.addEventListener('click', () => {
    mobileMenu.style.display = "block";
});
// close mobile menu

let closeButton = document.getElementById('closebtn');

closeButton.addEventListener('click', () => {
    mobileMenu.style.display = "none";
});
// close mobile menu when anchor tags clicked

let mobileAnchors = document.getElementsByClassName('mobile-anchor')

for (const link of mobileAnchors) {
    link.addEventListener('click', () => {
        mobileMenu.style.display = "none";
    })
};

// filter project cards functions 

function filterProjects (filter) {
    let projectList = document.getElementsByClassName('project-card');

    for (const project of projectList) {
        let classStr = project.className;
        if (filter == "showAll") project.style.display = 'flex';
        else if (classStr.indexOf(filter) > -1) project.style.display ='flex';
        else project.style.display = 'none';
    };
 };

// create button event handerlers
arrBtn = ['showAll', 'javascript', 'python', 'fullstack'];
arrBtn.forEach( button => {
    document.getElementById(button).addEventListener('click', () => filterProjects(button));
});
