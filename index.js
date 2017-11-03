// component locations
const scripts = [
  './client/navbar/index.js',
  './client/projects/index.js',
  './client/about/index.js',
  './client/footer/index.js',
];

// creates 'script' tag elements
const scriptConstructor = src => {
  const script = document.createElement('script');
  script.type = 'text/javascript'
  script.src = src;
  script.defer = 'defer';
  return script;
}

// appends/injects script tags to document head
const appendScript = script => {
  document.getElementsByTagName('head')[0].appendChild(scriptConstructor(script));
}

// creates all scripts based on items within 'scripts' array
scripts.forEach((source) => (
  appendScript(source)
))
