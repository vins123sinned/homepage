import weatherAppScreenshot from './assets/pictures/screenshots/weather-app.png';
import libraryScreenshot from './assets/pictures/screenshots/library.png';
import restaurantPageScreenshot from './assets/pictures/screenshots/restaurant-page.png';
import todoListScreenshot from './assets/pictures/screenshots/todo-list.png';
import battleshipScreenshot from './assets/pictures/screenshots/battleship.png';
import odinRecipesScreenshot from './assets/pictures/screenshots/odin-recipes.png';
import './styles.css';

const projects = [
    {
        img: weatherAppScreenshot,
        name: 'Weather App',
        description: 'A weather app utilizing the power of Visual Crossing\'s API and promises to deliver real time data about any city in the world.',
        githubLink: 'https://github.com/vins123sinned/weather-app',
        projectLink: 'https://vins123sinned.github.io/weather-app/',
    },
    {
        img: libraryScreenshot,
        name: 'Library',
        description: 'A simple project utilizing objects and object constructors to create and display a list of books.',
        githubLink: 'https://github.com/vins123sinned/Library',
        projectLink: 'https://vins123sinned.github.io/Library/',
    },
    {
        img: restaurantPageScreenshot,
        name: 'Restaurant Page',
        description: 'A website rendered using only DOM manipulation. Each website section will be created using DOM elements and styled using CSS',
        githubLink: 'https://github.com/vins123sinned/restaurant-page',
        projectLink: 'https://vins123sinned.github.io/restaurant-page/',
    },
    {
        img: todoListScreenshot,
        name: 'Todo List',
        description: 'A simple todo list that allows for creating, reading, updating, and deleting each todos.',
        githubLink: 'https://github.com/vins123sinned/todo-list',
        projectLink: 'https://vins123sinned.github.io/todo-list/',
    },
    {
        img: battleshipScreenshot,
        name: 'Battleship',
        description: 'Battleship game developed using Test Driven Development (TDD)',
        githubLink: 'https://github.com/vins123sinned/battleship',
        projectLink: 'https://vins123sinned.github.io/battleship/',
    },
    {
        img: odinRecipesScreenshot,
        name: 'Odin Recipes',
        description: 'My very first website after a very, very long hiatus! Enjoy my special flan recipe courtesy of allRecipes!',
        githubLink: 'https://github.com/vins123sinned/odin-recipes',
        projectLink: 'https://vins123sinned.github.io/odin-recipes/',
    }
];

function createProjectCell(project) {
    const grid = document.querySelector('.projects-grid');
    const projectCell = document.createElement('div');
    // screenshot could use resolution switching!
    const screenshot = document.createElement('img');
    const projectInformation = document.createElement('div');
    const projectHeader = document.createElement('header');

    const projectName = document.createElement('h3');
    const linksContainer = document.createElement('div');
    const githubLink = document.createElement('a');
    const projectLink = document.createElement('a');
    const githubIcon = document.createElement('img');
    const shareIcon = document.createElement('span');
    const projectDescription = document.createElement('p');
    
    projectCell.classList.add('project-cell');
    screenshot.classList.add('project-screenshot');
    projectInformation.classList.add('project-information');
    projectHeader.classList.add('project-header');
    projectName.classList.add('project-name');
    linksContainer.classList.add('project-links');
    githubLink.classList.add('project-github-link');
    githubIcon.classList.add('project-img-icon');
    shareIcon.classList.add('project-span-icon', 'material-symbols-outlined');
    projectDescription.classList.add('project-description');

    screenshot.src = project.img;
    screenshot.alt = '';
    projectName.textContent = project.name;
    projectDescription.textContent = project.description;
    githubLink.href = project.githubLink;
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    projectLink.href = project.projectLink;
    projectLink.target = '_blank';
    projectLink.rel = 'noopener noreferrer';
    githubIcon.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';
    githubIcon.alt = 'github';
    shareIcon.textContent = 'open_in_new';

    githubLink.appendChild(githubIcon);
    projectLink.appendChild(shareIcon);
    linksContainer.appendChild(githubLink);
    linksContainer.appendChild(projectLink);

    projectHeader.appendChild(projectName);
    projectHeader.appendChild(linksContainer);

    projectInformation.appendChild(projectHeader);
    projectInformation.appendChild(projectDescription);

    projectCell.appendChild(screenshot);
    projectCell.appendChild(projectInformation);

    grid.appendChild(projectCell);
}

(function populateProjects() {
    projects.forEach((project) => {
        createProjectCell(project);
    });
})();