const scripts = [
  './client/navbar/index.js',
];

const scriptConstructor = src => {
  const script = document.createElement('script');
  script.src = src;
  return script;
}

const appendScript = script => {
  document.getElementsByTagName('head')[0].appendChild(scriptConstructor(script));
}

scripts.map((source) => (
  appendScript(source)
))
