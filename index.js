// component locations
const scripts = [
  './client/navbar/index.js',
];

// creates 'script' tag elements
const scriptConstructor = src => {
  const script = document.createElement('script');
  script.src = src;
  return script;
}

// appends script tags to document head
const appendScript = script => {
  document.getElementsByTagName('head')[0].appendChild(scriptConstructor(script));
}

// creates all scripts based on items within 'scripts' array
scripts.map((source) => (
  appendScript(source)
))
