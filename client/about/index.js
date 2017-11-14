const aboutText = [
  `Hi! I'm Bryan.`,
  `One of my earliest memories is watching my dad, an aerospace engineer, tinkering in the garage with remote controlled cars & boats and my mom gardening. I think both of these experiences are indicitive of who I am as a person.`,
  `For the last year and a half, I've been primarily a JavaScript developer but I take pride in my flexibility and willingness to learn new languages.`,
];

const aboutHeader = document.createElement('div');
aboutHeader.className = 'about-header';
aboutHeader.innerHTML = 'about.';

const devImg = document.createElement('img');
devImg.className = 'dev-img'
devImg.src = 'assets/bqn.JPG';

const createParagraphs = (paragraph) => {
  const paraItem = document.createElement('p');
  paraItem.innerHTML = paragraph;
  return paraItem;  
};

const stringToPara = (parent, children) => {
  for (let i = 0; i < children.length; i++) {
    parent.appendChild(createParagraphs(children[i]));
  }
}

const aboutDesc = document.createElement('div');
aboutDesc.className = 'about-description';
stringToPara(aboutDesc, aboutText);
  
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
