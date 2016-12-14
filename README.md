# BEMagic (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ (WIP)

> Styleguide-driven development on speed

**BEMagic** is a suite of tools for working with the BEM naming convention in CSS. By using its "magic", BEMagic automatically generates a playground and documentation from your source code. The goal of this project is to automated everything that can be automated when it comes to working with and documenting CSS.

### Features

* Automatically convert your stylesheets into a lean development playground.
* Automatically generate developer docementation for BEM components.


### Install

Install the `bemagic` command to your system path:

    npm install bemagic


### Usage

See the ['examples'](examples) project for a boilerplate setup.

Run `bemagic` on a `.css` file of your choice:

    bemagic --watch my-styles.css

Optionally, you can pass in your own `config` file, like so:

    bemagic --config  bemagic.config.js my-styles.css

See the [default config]() for details.


### Motivation

BEMagic was created to limit the annoyance of having to manually add markup when authoring stylesheets.

Some benefits

* **Accurate & up-to-date workbench**. The BEmagic `workbench` always reflects the current state of the codebase.
* **Continuous documentation**. BEMagic ensures that all BEM components are complies to a certain level of documentation.


### How it works

Running BEMagic creates a server at [localhost:8080](http://localhost:8080) and watches for changes to the specified `.css` file. Whenever changes occur in the `.css` file, the selectors (classes) are converted into markup and streamed into the page using [socket.io](socket.io). Hence, when a new class is added, this class will instantly be represented on your screen.

##### Why not parse SCSS

It is easier to parse BEM components from compiled CSS and doesn't enforce any technology lockdown. Besides, in order to show results in the playground, it is advantageous to have a compiled output (though something like takana could be used instead)


### Extending BEMagic

I see to ways of extending the behavior of the system.

1. external `.md` files are parsed for extra information.
2. comments/postcss is added to the source stylesheets.
3. Complex examples are composed from the browser and stored from there.

#### @bemagic

BEMagic is intended to limit the amount of boilerplate code needed to build and test css BEM components. However, there are limitations to the information that can be extracted directly from a stylesheet. If you have non-flat components that needs to have special markup, you can use the `@bemagic` css rule to supply additional information about your component, like so:

```css
@bemagic {
    description: 'This description will in the top of the page for the .menu component.';
    text: none;
}
.menu {
    display: flex;
}

@bemagic {
    repeat: 4;
}
.menu__item {
    margin-right: 10px;
}

@bemagic {
    parent: .menu__item;
    text: 'My special text'
}
.menu__link {
    color: blue;
}

```

You can find a complete list of supported `prop: value` options here (FIXME).


### Browser editor

As an alternative to the `@bemagic` css at-rule, you can construct complex
examples directly in your browser.


## Limitations

##### Though somewhat customzeable, you need to follow strict conventions to use BEMagic.

##### BEMagic only works for single elements

##### BEMagic is not a tool for style-guides


## TODO

- [x] Have optional `@bemagic` at-rules working.
- [x] Create a companion site (surge.bemagic.sh).
- [ ] Add starting page in playground
- [ ] Consider using something like https://github.com/declandewet/common-tags
- [ ] Add a "not supported for this theme" overlay for components that are not supported.
- [ ] Create a `new` badge for components just added to a stylesheet + scroll
to that component in the browser.
- [ ] Cross browser support (for the playground)
- [ ] Create sub-categories in the sidebar navigation (forms, typography, etc.).
- [ ] Show modifiers + elements when component in sidebar navigation when
- [ ] Add fuzzy component search (fuse.js)
component is selected.
- [ ] Guess markup of elements based on props (e.g. display: flex; should have
no text. margin would suggest that more items needs to appear together).
- [ ] Annotate each component with browser support information. E.g. a component
using `display: flex` would be
could be a flag set (e.g. guessMarkup: true) for simple projects.
- [ ] An automatic solution to nesting, would be allowing nesting in stylesheets
(a technique that is already used some places).
- [ ] Use [sets](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set)
instead of objects where possible.
- [ ] Generate React components from styles

```css
.menu {}

    .menu__item {}

        .menu__link {}
```
