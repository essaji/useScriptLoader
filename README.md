# useScriptLoader hook

## install

```
npm install useScriptLoader --save
```

## usage

```js
const useScriptLoader = require('use-script-loader')

const { isLoading } = useScriptLoader('foo.js')
console.log(script.src);    // Prints 'foo'.js' after loading
if (!isLoading) {
  // use foo.js
}
```
