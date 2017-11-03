const aboutHeader = document.createElement('div');
aboutHeader.className = 'about-header';
aboutHeader.innerHTML = 'about.';

const devImg = document.createElement('img');
devImg.className = 'dev-img'
devImg.src = 'assets/bqn.JPG';

const aboutDesc = document.createElement('div');
aboutDesc.className = 'about-description';
aboutDesc.innerHTML = 'Bryan is the best developer I ever did see.'

const aboutContainer = document.createElement('div');
aboutContainer.className = 'about-container';
aboutContainer.appendChild(devImg);
aboutContainer.appendChild(aboutDesc);

const children = [
  aboutHeader,
  aboutContainer,
];

children.map(child => (
  document.getElementById('about').appendChild(child)
));
