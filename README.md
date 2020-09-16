# useScriptLoader hook

## install

```
npm install useScriptLoader
```

## usage

```js
const loadScript = require('load-script2')

const { isLoading } = useScriptLoader('foo.js')
console.log(script.src);    // Prints 'foo'.js' after loading
if (!isLoading) {
  // use foo.js
}
```
