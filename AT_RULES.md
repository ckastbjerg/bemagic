# At rules

> This file holds descriptions for all available at-rule options

* [usage](#usage)
* [html attributes](#attributes)
* [intro](#intro)
* [description](#description)
* [tag](#tag)
* [mandatory](#mandatory)
* [family](#family)
* [parent](#parent)

#### Usage

```css
/*
@bemagic {
    intro: <string>
    description: <string>
    mandatory: <bool>
    tag: <string>
}
*/
.block {}
```

`intro` and `description` support markdown syntax.

#### `attributes`

Any valid html attribute can be used (based on (this list)[https://github.com/alexmingoia/html-attributes/blob/master/lib/html-attributes.js]). This will be applied to the markup of the element when parsed by BEMagic.

Example:
```css
/*
@bemagic {
    placeholder: My placeholder,
}
*/
.textfield {}
```

```html
<input placeholder="My placeholder"></input>
```


#### `intro`

An introductory description that will appear in the very top of the components
markdown file.

Example:
```css
/*
@bemagic {
    intro: A very clever summary of the `block` component
}
*/
.block {}
```


#### `description`

A description a component class.

Example:
```css
/*
@bemagic {
    description: This describes the outcome of using the `block` class
}
*/
.block {}
```


#### `tag`

Used to indicate that a specific html tag is intended to be used with this
class name. **Note** that classes that are named

Example:
```css
/*
@bemagic {
    tag: input
}
*/
.block__textfield {}
```


#### `mandatory`

Use this to indicate that a descendant of a component is mandatory. **Note**,
that the component class is always mandatory and doesn't need this specified.

Example:
```css
/*
@bemagic {
    mandatory: true
}
*/
.block__element {}
```


#### `family`

Use this to indicate that a component or element belongs to a certain family (or group). Classes
in the same `family` are classes that are *not* chain-able.

Example:
```css
/*
@bemagic {
    family: color
}
*/
.button__red {
    background-color: red;
}

/*
@bemagic {
    family: color
}
*/
.button__yellow {
    background-color: yellow;
}
```

This will allow bemagic to create more accurate examples and documentation.


#### `parent`

The `parent` property can be used to indicated which other class (within the component) is the direct parent of an BEM element. This is necessary when a component has more than one level of nesting.

Example:
```css
.parent {}
.parent__child {}

/*
@bemagic {
    parent: child
}
*/
.parent__grand-child {}
```
