const navBar = document.createElement('div');
navBar.className = 'nav-bar';

const navHeader = document.createElement('h1');
navHeader.className = 'nav-header';
navHeader.innerHTML = 'bryan nguyen';

const projectsLink = document.createElement('div');
projectsLink.className = 'projects-link';
projectsLink.innerHTML = 'projects';

const aboutLink = document.createElement('div');
aboutLink.className = 'about-link';
aboutLink.innerHTML = 'about';

const contactLink = document.createElement('div');
contactLink.className = 'contact-link';
contactLink.innerHTML = 'contact';

const navChildren = [
  navHeader,
  projectsLink,
  aboutLink,
  contactLink,
];

navChildren.map(navItem => (
  navBar.appendChild(navItem)
))

document.getElementById('navbar').appendChild(navBar);
