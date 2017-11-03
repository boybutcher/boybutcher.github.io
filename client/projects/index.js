const projectsHeader = document.createElement('div');
projectsHeader.className = 'projects-header';
projectsHeader.innerHTML = 'projects.';

const projects = [
  {
    image: 'assets/artpoint.jpeg',
    name: 'ArtPoint',
    stack: 'React/Redux, React Router, Postgres, Heroku, Cloudinary & Stripe API',
    description: 'An eBay for art.',
  },
  {
    image: 'assets/daytripper.jpeg',
    name: 'DayTripper',
    stack: 'React, MongoDB, Google Maps & Yelp API',
    description: 'an itinerary planning app.',
  },  
  {
    image: 'assets/familihr.jpeg',
    name: 'FamiliHR',
    stack: 'React, MongoDB, Google Maps & Yelp API',
    description: 'a spacial repitition learning app.',
  },
];

const createProjectItem = project => {
  const projectItem = document.createElement('div');
  projectItem.className = 'project-item';
  projectItem.appendChild(createImage(project));
  projectItem.appendChild(CreateDescContainer(project));
  return projectItem;
};

const createImage = project => {
  const imageContainer = document.createElement('div');
  imageContainer.className = 'image-container';
  const projectImage = document.createElement('img');
  projectImage.className = 'project-image';
  projectImage.src = project.image;
  imageContainer.appendChild(projectImage);
  return imageContainer
};

const CreateDescContainer = project => {
  const descContainer = document.createElement('div')
  descContainer.className = 'desc-container';
  descContainer.appendChild(createProjectName(project));
  descContainer.appendChild(createProjectStack(project));
  descContainer.appendChild(createProjectDesc(project));
  return descContainer;
}

const createProjectName = project => {
  const projectName = document.createElement('div');
  projectName.className = 'project-name';
  projectName.innerHTML = project.name;
  return projectName;
}

const createProjectStack = project => {
  const projectStack = document.createElement('div');
  projectStack.className = 'project-stack';
  projectStack.innerHTML = project.stack;
  return projectStack;
}

const createProjectDesc = project => {
  const projectDesc = document.createElement('div');
  projectDesc.className = 'project-description';
  projectDesc.innerHTML = project.description;
  return projectDesc;
}

document.getElementById('projects').appendChild(projectsHeader);

projects.map(project => (
  document.getElementById('projects').appendChild(createProjectItem(project))
));
