# Parsed result

> This file holds descriptions for all available at-rule options

* [introduction](#introduction)
* [shape](#shape)
* [atRules](#atRules)

#### Introduction

BEMagic parses any `.css` and extracts information on components following BEM naming. `@-rules` can be used to instruct BEMagic on how to parse special components.


#### `attributes`

For every discovered **Block**, **Modifier**, **Element**, and **Element modifier** the following JSON structure is extracted:

```json
{
    atRules,
    classes,
    customMarkup,
    derivedExample,
    elements?,
    markup,
    mixedStates,
    modifiers?,
    name,
    pseudoStates,
    states,
    tagName,
    themes,
}
```

#### `attRules`

`atRules` contains property-value pairs as specified in a parsed CSS file. See `AT_RULES` for details.
