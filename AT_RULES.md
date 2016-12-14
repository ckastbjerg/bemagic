# At rules

> This file holds descriptions for all available at-rule options

* [usage](#usage)
* [intro](#intro)
* [description](#description)
* [tag](#tag)
* [required](#required)

#### Usage

```css
/*
@bemagic {
    intro: <string>
    description: <string>
    required: <bool>
    tag: <string>
}
*/
.block {}
```

`intro` and `description` support markdown syntax.


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


#### `required`

Use this to indicate that a descendant of a component is required. **Note**,
that the component class is always required and doesn't need this specified.

Example:
```css
/*
@bemagic {
    required: true
}
*/
.block__element {}
```
