const projectsContainer = document.createElement('div');
projectsContainer.className = 'projects-container';

const projectsHeader = document.createElement('h2');
projectsHeader.className = 'projects-header';
projectsHeader.innerHTML = 'projects.';

const projects = [
  {
    image: 'http://myhswm.org/images/sized/images/animals/Sashacatcrop-256x256.jpeg',
    name: 'ArtPoint',
    description: `Lorem Khaled Ipsum is a major key to success. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. Bless up. You smart, you loyal, you a genius. Special cloth alert. Wraith talk. Let’s see what Chef Dee got that they don’t want us to eat. I’m up to something. Hammock talk come soon. The key to more success is to have a lot of pillows. Lion! Cloth talk. Congratulations, you played yourself. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh.`,
  },
  {
    image: 'https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg',
    name: 'DayTripper',
    description: `Cloth talk. It’s on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean. Eliptical talk. Bless up. Congratulations, you played yourself. Let’s see what Chef Dee got that they don’t want us to eat. Mogul talk. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they don’t want you to jetski, they don’t want you to smile.`,
  }
];

const createProjectItem = project => {
  const projectItem = document.createElement('div');
  projectItem.className = 'project-item';
  projectItem.appendChild(createImage(project));
  projectItem.appendChild(createProjectName(project));
  projectItem.appendChild(createProjectDesc(project));
  return projectItem;
};

const createImage = project => {
  const projectImage = document.createElement('img');
  projectImage.src = project.image;
  return projectImage;
};

const createProjectName = project => {
  const projectName = document.createElement('h4');
  project.className = 'project-name';
  projectName.innerHTML = project.name;
  return projectName;
}

const createProjectDesc = project => {
  const projectDesc = document.createElement('div');
  projectDesc.className = 'project-description';
  projectDesc.innerHTML = project.description;
  return projectDesc;
}

projectsContainer.appendChild(projectsHeader);

projects.map(project => (
  projectsContainer.appendChild(createProjectItem(project))
));

document.getElementById('projects').appendChild(projectsContainer);
