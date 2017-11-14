const createAboutLink = (text, link) => {
  const linkItem = document.createElement('a');
  linkItem.href = link;
  linkItem.innerHTML = text;
  linkItem.target = '_blank';
  return linkItem;
}

const aboutHeader = document.createElement('div');
aboutHeader.className = 'about-header';
aboutHeader.innerHTML = 'about.';

const devImg = document.createElement('img');
devImg.className = 'dev-img'
devImg.src = 'assets/bqn.JPG';

const aboutDesc = document.createElement('div');
aboutDesc.className = 'about-description';

const paraOne = document.createElement('p');
paraOne.innerHTML = `Hi! I'm Bryan.`;
aboutDesc.appendChild(paraOne);

const paraTwo = document.createElement('p');
paraTwo.innerHTML = `One of my earliest memories is watching my dad, an aerospace engineer, tinkering in the garage with remote controlled cars & boats and my mom gardening. Both of these experiences have helped define who I am: a tinker with an eye for the finer details.`;
aboutDesc.appendChild(paraTwo);

const paraThree = document.createElement('p');
paraThree.innerHTML = `For the last year and a half, I've been primarily a JavaScript developer but I take pride in my flexibility and willingness to learn new languages.`;
aboutDesc.appendChild(paraThree);

const paraFour = document.createElement('p');
paraFour.innerHTML = `I love writing both `;
paraFour.appendChild(createAboutLink('client', 'https://github.com/TenaciousTurtles/ArtPoint/blob/master/client/src/components/CreateAuction.jsx'));
paraFour.innerHTML += ' & ';
paraFour.appendChild(createAboutLink('server', 'https://github.com/TenaciousTurtles/ArtPoint/blob/master/server/server.js'));
paraFour.innerHTML += ' side code in React, Angular & Backbone.';
aboutDesc.appendChild(paraFour);
  
const paraFive = document.createElement('p');
paraFive.innerHTML = `I find satisfaction in writing complex and efficient SQL `;
paraFive.appendChild(createAboutLink('schemas', 'https://github.com/boybutcher/ArtPoint/blob/master/server/database/schema.js'));
paraFive.innerHTML += ' & ';
paraFive.appendChild(createAboutLink('queries', 'https://github.com/boybutcher/ArtPoint/blob/master/server/database/queries.js'));
paraFive.innerHTML += '.';
aboutDesc.appendChild(paraFive);

const paraSix = document.createElement('p');
paraSix.innerHTML = `In my free time, I love working on `;
paraSix.appendChild(createAboutLink('personal projects', 'https://github.com/boybutcher/shell.'));
paraSix.innerHTML += ` that let me connect with my users in new and interesting ways.`;
aboutDesc.appendChild(paraSix);

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
