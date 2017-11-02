const aboutHeader = document.createElement('h2');
aboutHeader.className = 'about-header';
aboutHeader.innerHTML = 'about.';

const devImg = document.createElement('img');
devImg.className = 'dev-img'
devImg.src = 'assets/bqn.JPG';

const aboutDesc = document.createElement('div');
aboutDesc.className = 'about-description';
aboutDesc.innerHTML = 'The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key. The key is to drink coconut, fresh coconut, trust me. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. They will try to close the door on you, just open it. Hammock talk come soon. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there. The key is to drink coconut, fresh coconut, trust me.'

const children = [
  aboutHeader,
  devImg,
  aboutDesc,
];

children.map(child => (
  document.getElementById('about').appendChild(child)
));
