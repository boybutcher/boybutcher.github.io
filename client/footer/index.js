const footer = document.getElementById('footer');
const links = [
  {
    name: 'GitHub',
    source: 'https://github.com/boybutcher',
  }, 
  {
    name: 'LinkedIn',
    source: 'https://www.linkedin.com/in/bqnguyen1/',
  }, 
];

const footerTitle = document.createElement('div');
footerTitle.className = 'footer-title';
footerTitle.innerHTML = 'bryan nguyen';

const createLink = (linkObj) => {
  const link = document.createElement('a');
  link.className = linkObj.name + ' link';
  link.innerHTML = linkObj.name;
  link.href = linkObj.source;
  link.target = '_blank';
  return link;
};

footer.appendChild(footerTitle);
links.map(linkObj => {
  footer.appendChild(createLink(linkObj));
})
