const navBar = document.createElement('div');
navBar.className = 'nav-bar';

const navHeader = document.createElement('h1');
navHeader.className = 'nav-header';
navHeader.innerHTML = 'Bryan Nguyen';

navBar.appendChild(navHeader);

document.body.appendChild(navBar);
