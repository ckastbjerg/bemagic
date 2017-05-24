## Background `ep-background`
> A short summary of the component


###### Table of contents
- **[Theming](#theming)**
- **[Modifiers](#modifiers)**


- **[Component overview](#component-overview)**
- **[Contributing](#contributing)**



<a name=Usage></a>
#### Usage

<div class="ep-background">background</div>



<a name=Theming></a>
#### Theming

The `ep-background` supports [`theming`](../CONVENTIONS.md) and can change its
appearance when paired with the `ep-cascading-theme` class.
Note however, that themes may apply only for parts of the component.

```html
<div class="ep-background ep-cascading-theme">…</div>
<!-- or using nesting -->
<div class="ep-cascading-theme">
<div class="ep-background">…</div>
</div>
```
<sub>See the [Component Overview](#component-overview) for more details.</sub>



<a name=modifier></a>
#### Modifier


The background component makes use of
[`modifiers`](../CONVENTIONS.md#modifiers) to alter its appearance
.

```html
<div class="ep-background ep-background--secondary">background secondary</div>
```

#####All component `modifier`


| Name | Description |
|:-----|:-----|
| **`secondary`** | N/A |


<sub>See the [Component Overview](#component-overview) for more details</sub>




<a name=Component Overview></a>
#### Component Overview
| Class Name | Type | States | Tag |
|:-----|:-----|:-----|:-----|
| **[`background`](#background)** | [component](../CONVENTIONS.md#components) | None | N/A |
| **[`secondary`](#secondary)** | [modifier](../CONVENTIONS.md#modifiers) | None | N/A |




<a name=background></a>
#### `background` 
> Description of `background`
<div class="ep-background">background</div>
Elements using this class will change appearance when used inside [theme]
(../CONVENTIONS.md#theming) `inverse`.

###### Specifications


----------


<a name=secondary></a>
#### `secondary` 
*This class could use a description...*
<div class="ep-background ep-background--secondary">background secondary</div>
Elements using this class will change appearance when used inside [theme]
(../CONVENTIONS.md#theming) `inverse`.

###### Specifications


----------




<a name=Contributing></a>
#### Contributing
;

Please view the **[contribution guidelines](../CONVENTIONS.md)** before
modifying this component
.