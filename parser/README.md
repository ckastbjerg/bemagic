# BEMagic parser

> The BEMagic parser is the heart of bemagic. It parses a CSS file an returns a complex object describing the various Block's, Element's and Modifier's extracted from the CSS.


## Install

`npm install --save-dev bemagic-parser`


## Usage

```javascript
const parser = require('bemagic-parser');
parser(css).then(function(data) {
    ...
});
```


## Returns

```javascript
{
    components: ..., // data describing all components
    themes: ..., // data describing theme usage
}
```
