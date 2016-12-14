## Block `ep-block` 

> A short summary of the component

###### Table of contents

- **[Usage](#usage)**
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


<a name=modifiers></a>
#### Modifiers

The block component makes use of [`modifiers`](../CONVENTIONS.md#modifiers) to alter its appearance.

```html 
<div class="ep-block ep-block--modifier">…</div>
``` 

#####All component `modifiers`
| Name | Description |
|:-----|:-----|
| **`modifier`** | Description of a modifier | 


<sub>See the [Component Overview](#component-overview) for more details.</sub>


<a name=states></a>
#### States

The block component can use [`states`](../CONVENTIONS.md#states) for certain conditions..

```html 
<div class="ep-block is-active">…</div>
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
<input class="ep-block__element">…</input>
``` 

#####All component `descendants`
| Name | Description |
|:-----|:-----|
| **`element`** | Description of an element | 


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



The component will react to `hover`. states

###### Specifications

- **Type:** container

----------
<a name=ep-block--modifier></a>
#### `ep-block--modifier` 

> Description of a modifier

```html 
<div class="ep-block ep-block--modifier">…</div>
``` 


----------
<a name=ep-block__element></a>
#### `ep-block__element` (required)

> Description of an element

```html 
<input class="ep-block__element">…</input>
``` 

###### Specifications

- **Required:** true
- **Tag:** input

----------
<a name=ep-block__element--modifier></a>
#### `ep-block__element--modifier` 

> Description of an elements modifier

```html 
<div class="ep-block ep-block--modifier">…</div>
``` 

###### Specifications


----------

<a name=Contributing></a>
#### Contributing

Please view the **[contribution guidelines](../CONVENTIONS.md)** before modifying this component.

