## Block `ep-block` 

> A short summary of the component

###### Table of contents

- **[Usage](#usage)**
- **[Theming](#theming)**
- **[Modifiers](#modifiers)**
- **[States](#states)**
- **[Descendants](#descendants)**
- **[Component overview](#component-overview)**
- **[Contributing](#contributing)**


<a name=Usage></a>
#### Usage

```html 
<div class="ep-block">
    <div class="ep-block__element"></div>
    <div class="ep-block__element--modifier"></div>
</div>

``` 


<a name=Theming></a>
#### Theming

The `ep-block` supports [`theming`](../CONVENTIONS.md) and can change its appearance when wrapped in the [`ep-background`](../background) component. Note however, that themes may apply only for parts of the component.
```html 
<div class="ep-background">
    <div class="ep-block">…</div>
</div>
``` 


<sub>See the [Component Overview](#component-overview) for more details.</sub>


<a name=modifiers></a>
#### Modifiers

The block component makes use of [`modifiers`](../CONVENTIONS.md#modifiers) to alter its appearance.

```html 
<div class="ep-block ep-block--modifier"></div>
``` 

#####All component `modifiers`
| Name | Description |
|:-----|:-----|
| **`modifier`** | Description of `modifier` for `block` | 


<sub>See the [Component Overview](#component-overview) for more details.</sub>


<a name=states></a>
#### States

The block component can use [`states`](../CONVENTIONS.md#states) for certain conditions..

```html 
<div class="ep-block is-active"></div>
``` 

#####All component `states`
| Name | Description |
|:-----|:-----|
| **`active`** | N/A | 


<sub>See the [Component Overview](#component-overview) for more details.</sub>


<a name=descendants></a>
#### Descendants

The block has [`descendants`](../CONVENTIONS.md#descendants) that can be appended to the component.

```html 
<input class="ep-block__element"></input>
``` 

#####All component `descendants`
| Name | Description |
|:-----|:-----|
| **`element`** | Description of `block` | 


<sub>See the [Component Overview](#component-overview) for more details.</sub>


<a name=Component Overview></a>
#### Component Overview

| Class Name | Type | States | Tag |
|:-----|:-----|:-----|:-----|
| **[`ep-block`](#ep-block)** | [component](../CONVENTIONS.md#components) | `active`. | N/A  |
| **[`ep-block--modifier`](#ep-block--modifier)** | [modifier](../CONVENTIONS.md#modifiers) | `active`. | N/A  |
| **[`ep-block__element`](#ep-block__element)** | [descendant](../CONVENTIONS.md#descendants) | `active`. | input  |
| **[`ep-block__element--modifier`](#ep-block__element--modifier)** | [modifier](../CONVENTIONS.md#modifiers) | `active`. | input  |


<a name=ep-block></a>
#### `ep-block` 

> Description of `block`

```html 
<div class="ep-block">container</div>
``` 

Elements using this class will change appearance when used inside [theme](../CONVENTIONS.md#theming) `secondary` or `inverse`. See the [`undefined-background`](../background) component for details.


The component will react to `hover`. states

###### Specifications

- **Type:** container

----------
<a name=ep-block--modifier></a>
#### `ep-block--modifier` 

> Description of `modifier` for `block`

```html 
<div class="ep-block ep-block--modifier"></div>
``` 

Elements using this class will change appearance when used inside [theme](../CONVENTIONS.md#theming) `secondary` or `inverse`. See the [`undefined-background`](../background) component for details.

----------
<a name=ep-block__element></a>
#### `ep-block__element` (required)

> Description of `block`

```html 
<input class="ep-block__element"></input>
``` 

Elements using this class will change appearance when used inside [theme](../CONVENTIONS.md#theming) `secondary` or `inverse`. See the [`undefined-background`](../background) component for details.
###### Specifications

- **Required:** true
- **Tag:** input

----------
<a name=ep-block__element--modifier></a>
#### `ep-block__element--modifier` (required)

> Description of `block`

```html 
<div class="ep-block ep-block--modifier"></div>
``` 

Elements using this class will change appearance when used inside [theme](../CONVENTIONS.md#theming) `secondary` or `inverse`. See the [`undefined-background`](../background) component for details.
###### Specifications

- **Required:** true

----------

<a name=Contributing></a>
#### Contributing

Please view the **[contribution guidelines](../CONVENTIONS.md)** before modifying this component.

