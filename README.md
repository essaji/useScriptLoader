# use-script-loader hook [![Build Status](https://travis-ci.org/essaji/useScriptLoader.svg?branch=master)](https://travis-ci.org/essaji/useScriptLoader)

Inspired by [scriptLoader2](https://github.com/feross/load-script2)
## install

```
npm install use-script-loader --save
```

## usage

```js
const useScriptLoader = require('use-script-loader')

const [loading, script, error] = useScriptLoader('https://ajax.googleapis.com/ajax/libs/jquery/x.x.x/jquery.min.js')
if (loading) return <Spinner />
if (error) throw error
console.log(script.src);    // Prints 'https://ajax.googleapis.com/ajax/libs/jquery/x.x.x/jquery.min.js'

// use jQuery here
```

## API

### `object = useScriptLoader(src, [attrs], [parentNode], [skip])`

Append a `<script>` node with the given `src` URL to the `<head>` element in the DOM.

#### `src`

Any url that you would like to load.  May be absolute or relative.

#### `attrs` (optional)

An object that contains HTML attributes to set on the `<script>` tag. For
example, the value `{ id: 'hi' }` would set the attribute `id="hi"` on the
`<script>` tag before it is injected.

#### `parentNode` (optional)

The HTML node to which the `<script>` tag will be appended. If not specified,
defaults to the `<head>` tag.

### `skip` (optional)

If `true`, will not append script. Default value is `false`

#### `array: [loading, script, error]`

Returns an array which can be destructed to `[loading, script, error]`

* **loading:** Remains `true` till script is loaded
* **script:** source url
* **error:** error object containing message as string

## license

MIT. Copyright (c) [Eesa Abid](https://github.com/essaji).
