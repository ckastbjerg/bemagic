## Example project naming conventions

Example project follows [BEM naming conventions](http://getbem.com/naming/).
It relies on _structured class names_ and _meaningful hyphens and underscores_
(i.e., not using hyphens merely to separate words). This helps to work around
the current limits of applying CSS to the DOM (i.e., the lack of style
encapsulation), and to better communicate the relationships between classes.

**Table of contents**
* [Naming syntax](#naming-syntax)
* [The `ep` namespace](#namespace)
* [Components](#components)
* [Modifiers](#modifiers)
* [Descendants](#descendants)
* [States](#states)
* [Cascades](#cascades)

<a name="naming-syntax"></a>
### Naming syntax

All components in the Example project design system must use this syntax.

Syntax: `[<namespace>-]<component-name>[__descendant-name][--modifier-name]`

This has several benefits when reading and writing HTML and CSS:

* It helps to distinguish between the classes for the root of the component,
descendent elements, and modifications.
* It keeps the specificity of selectors low.
* It helps to decouple presentation semantics from document semantics.

<a name="namespace"></a>
### The `ep` namespace

All components are prefixed with the `ep-` namespace. This helps us
avoid potential collisions when Example project is used in conjunction with other CSS
projects or libraries. It also improves _grepability_ for the components.

```css
.ep-button { /* … */ }
.ep-tabs { /* … */ }
```

This makes it clear, when reading the HTML, which components are part of the
Example project library.


<a name="components"></a>
### Components

A component name must be written in lower case and separated by hyphens.

```css
.ep-my-component { /* … */ }
```

```html
<div class="ep-my-component">…</div>
```

<a name="modifiers"></a>
### Modifiers

A component modifier is a class that modifies the presentation of the base
component in some form (e.g., for a certain configuration of the component).
Modifier names must be separated from the component name by two hyphens. The
class should be included in the HTML _in addition_ to the base component class.

```css
/* Default button */
.ep-button { /* … */ }

/* Button variant */
.ep-button--positive { /* … */ }
```

```html
<button class="ep-button ep-button--positive">…</button>
```

<a name="descendants"></a>
### Descendants

A component descendent is a class that is attached to a descendent node of a
component. It's responsible for applying presentation directly to the
descendent on behalf of a particular component. Descendent names must be
separated from the component name by two underscores.

```html
<article class="ep-menu">
<div class="ep-menu__item">
<div class="ep-menu__link">…</div>
…
</div>
</article>
```

Descendants can themeselves have modifier following the same conventions as the
[component modifiers](#modifiers). Note however, that
**descendant can not themselves have descendant**. If this seems necesarry, you
might want to consider creating a new component.


<a name="states"></a>
### States

Use `is-some-state-name` to reflect changes to a component's state. This is
actually a [SMACSS](https://smacss.com/book/type-state) concept, and not a BEM
convention. States differ from `modifiers`, in that they indicate some kind of runtime
condition and might be affected by stuff like user-interactions or data-fetching
logic. Examples of this could be `is-active`, `is-loading` or `is-expanded`
state classes. As their names suggest, these are more temporary states that are
most commonly  added during using javascript.

**Never style these classes directly**; they should always be used as an
adjoining class. This means that the same state names can be used in multiple
contexts, but every component must define its own styles for the state (as they
are scoped to the component).

```css
.ep-button { /* … */ }
.ep-button.is-loading { /* … */ }
```

```html
<button class="ep-button is-loading"></button>
```

<a name="cascades"></a>
### Cascades

**Example project components should never be styled from within other components**
(also known as contextual styling). However, there are situations where it makes
sence to have a Component modify its appearance based on the context in which it
appears. A common example of this is theming, In this case, the component should know
about the theme in which it appears but the theme should not know about the component.

```css
.ep-cascading-theme-inverse .ep-button { /* … */ }
```

```html
<div class="ep-cascading-theme-inverse">
<div class="ep-button">…</div>
</div>
```

The overarching goal here, is to keep the component as encapsulated and
self-contained as possible while still allowing ease of use for complex theming
scenarios.