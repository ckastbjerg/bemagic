## Derive-example `ep-derive-example`
> A component for bemagic to guess the structure of


###### Table of contents



- **[Elements](#elements)**
- **[Component overview](#component-overview)**
- **[Contributing](#contributing)**



<a name=Usage></a>
#### Usage

<div class="ep-derive-example">derive-example</div>



<a name=Theming></a>
#### Theming

The `ep-derive-example` supports [`theming`](../CONVENTIONS.md) and can change its
appearance when paired with the `ep-cascading-theme` class.
Note however, that themes may apply only for parts of the component.

```html
<div class="ep-derive-example ep-cascading-theme">…</div>
<!-- or using nesting -->
<div class="ep-cascading-theme">
<div class="ep-derive-example">…</div>
</div>
```
<sub>See the [Component Overview](#component-overview) for more details.</sub>





<a name=elements></a>
#### Elements


The derive-example component makes use of
[`modifiers`](../CONVENTIONS.md#modifiers) to alter its appearance
.

```html
<div class="ep-derive-example__child">derive-example child</div>
```

#####All component `elements`


| Name | Description |
|:-----|:-----|
| **`child`** | a child |
| **`grand-child`** | a grandchild |
| **`grand-child-sibling`** | another grandchild |


<sub>See the [Component Overview](#component-overview) for more details</sub>


<a name=Component Overview></a>
#### Component Overview
| Class Name | Type | States | Tag |
|:-----|:-----|:-----|:-----|
| **[`derive-example`](#derive-example)** | [component](../CONVENTIONS.md#components) | None | N/A |
| **[`child`](#child)** | [element](../CONVENTIONS.md#elements) | None | N/A |
| **[`grand-child`](#grand-child)** | [element](../CONVENTIONS.md#elements) | None | N/A |
| **[`grand-child-sibling`](#grand-child-sibling)** | [element](../CONVENTIONS.md#elements) | None | N/A |




<a name=derive-example></a>
#### `derive-example` 
> An example structure of this component will be derived by bemagic
<div class="ep-derive-example">derive-example</div>
Elements using this class will change appearance when used inside [theme]
(../CONVENTIONS.md#theming) 

###### Specifications


----------




<a name=child></a>
#### `child` 
> a child
<div class="ep-derive-example__child">derive-example child</div>
Elements using this class will change appearance when used inside [theme]
(../CONVENTIONS.md#theming) 

###### Specifications


----------




<a name=grand-child></a>
#### `grand-child` 
> a grandchild
<div class="ep-derive-example__grand-child">derive-example grand-child</div>
Elements using this class will change appearance when used inside [theme]
(../CONVENTIONS.md#theming) 

###### Specifications

- **Parent:** child
----------




<a name=grand-child-sibling></a>
#### `grand-child-sibling` 
> another grandchild
<div class="ep-derive-example__grand-child-sibling">derive-example grand-child-sibling</div>
Elements using this class will change appearance when used inside [theme]
(../CONVENTIONS.md#theming) 

###### Specifications

- **Parent:** child
----------





<a name=Contributing></a>
#### Contributing
;

Please view the **[contribution guidelines](../CONVENTIONS.md)** before
modifying this component
.