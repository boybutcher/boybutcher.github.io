const navHeader = document.createElement('div');
navHeader.className = 'nav-header';
navHeader.innerHTML = 'bryan nguyen';

const clickLinkHandler = (link) => {
  document.getElementById(link.innerHTML).scrollIntoView(true);
}

const projectsLink = document.createElement('div');
projectsLink.className = 'projects link';
projectsLink.innerHTML = 'projects';
projectsLink.onclick = () => {
  clickLinkHandler(projectsLink);
}

const aboutLink = document.createElement('div');
aboutLink.className = 'about link';
aboutLink.innerHTML = 'about';
aboutLink.onclick = () => {
  clickLinkHandler(aboutLink);
}

const navChildren = [
  navHeader,
  projectsLink,
  aboutLink,
];

navChildren.map(navItem => (
  document.getElementById('navbar').appendChild(navItem)
))
