self.window = self;

importScripts('http://localhost:8080/bucklescript.js');
// importScripts('https://reason.surge.sh/bucklescript-deps.js');

self.postMessage('ready');

self.addEventListener('message', ev => {
  const { codesandbox, code } = ev.data;

  if (!codesandbox) {
    return;
  }

  const { js_code } = self.ocaml.reason_compile_super_errors(code);

  self.postMessage({ transpiledCode: js_code });
});
