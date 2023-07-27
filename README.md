# minimal-atomics

Minimal web app demonstrating the usage of [`Atomics`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics) and [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript.

## Local development

The website must be served in a [secure context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts) to use [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer). You can use [`local-web-server`](https://www.npmjs.com/package/local-web-server) to locally host the website with the required headers:

```
ws --cors.opener-policy same-origin --cors.embedder-policy require-corp
```
