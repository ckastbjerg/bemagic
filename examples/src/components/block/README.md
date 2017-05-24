## Block `ep-block`
> A short summary of the component


###### Table of contents
- **[Theming](#theming)**
- **[Modifiers](#modifiers)**
- **[States](#states)**
- **[Elements](#elements)**
- **[Component overview](#component-overview)**
- **[Contributing](#contributing)**



<a name=Usage></a>
#### Usage

<div class="ep-block">
Custom markup example...
<div class="ep-block__element">some element</div>
<div class="ep-block__element--modifier">some modifier</div>
</div>




<a name=Theming></a>
#### Theming

The `ep-block` supports [`theming`](../CONVENTIONS.md) and can change its
appearance when paired with the `ep-cascading-theme` class.
Note however, that themes may apply only for parts of the component.

```html
<div class="ep-block ep-cascading-theme">…</div>
<!-- or using nesting -->
<div class="ep-cascading-theme">
<div class="ep-block">…</div>
</div>
```
<sub>See the [Component Overview](#component-overview) for more details.</sub>



<a name=modifier></a>
#### Modifier


The block component makes use of
[`modifiers`](../CONVENTIONS.md#modifiers) to alter its appearance
.

```html
<div class="ep-block ep-block--modifier">block modifier</div>
```

#####All component `modifier`


| Name | Description |
|:-----|:-----|
| **`modifier`** | Description of a modifier |


<sub>See the [Component Overview](#component-overview) for more details</sub>



<a name=states></a>
#### States


The block component makes use of
[`modifiers`](../CONVENTIONS.md#modifiers) to alter its appearance
.

```html
undefined
```

#####All component `states`


| Name | Description |
|:-----|:-----|
| **`active`** | N/A |


<sub>See the [Component Overview](#component-overview) for more details</sub>



<a name=elements></a>
#### Elements


The block component makes use of
[`modifiers`](../CONVENTIONS.md#modifiers) to alter its appearance
.

```html
<input class="ep-block__element"></input>
```

#####All component `elements`


| Name | Description |
|:-----|:-----|
| **`element`** | Description of an element |


<sub>See the [Component Overview](#component-overview) for more details</sub>


<a name=Component Overview></a>
#### Component Overview
| Class Name | Type | States | Tag |
|:-----|:-----|:-----|:-----|
| **[`block`](#block)** | [component](../CONVENTIONS.md#components) | None | N/A |
| **[`modifier`](#modifier)** | [modifier](../CONVENTIONS.md#modifiers) | None | N/A |
| **[`element`](#element)** | [element](../CONVENTIONS.md#elements) | None | N/A |
| **[`modifier`](#modifier)** | [modifier](../CONVENTIONS.md#modifiers) | None | N/A |




<a name=block></a>
#### `block` 
> Description of `block`
<div type="container" class="ep-block">block</div>
Elements using this class will change appearance when used inside [theme]
(../CONVENTIONS.md#theming) `inverse`.
The component will react to `disabled`, `active`, `hover` and `focus`. states
###### Specifications

- **Type:** container
----------


<a name=modifier></a>
#### `modifier` 
> Description of a modifier
<div class="ep-block ep-block--modifier">block modifier</div>
Elements using this class will change appearance when used inside [theme]
(../CONVENTIONS.md#theming) `inverse`.
The component will react to `disabled`, `active`, `hover` and `focus`. states
###### Specifications


----------



<a name=element></a>
#### `element` (mandatory)
> Description of an element
<input class="ep-block__element"></input>
Elements using this class will change appearance when used inside [theme]
(../CONVENTIONS.md#theming) `inverse`.
The component will react to `disabled`, `active`, `hover` and `focus`. states
###### Specifications

- **Mandatory:** true- **Tag:** input
----------


<a name=modifier></a>
#### `modifier` 
> Description of an elements modifier
<input class="ep-block__element ep-block__element--modifier"></input>
Elements using this class will change appearance when used inside [theme]
(../CONVENTIONS.md#theming) `inverse`.
The component will react to `disabled`, `active`, `hover` and `focus`. states
###### Specifications


----------




<a name=Contributing></a>
#### Contributing
;

Please view the **[contribution guidelines](../CONVENTIONS.md)** before
modifying this component
.