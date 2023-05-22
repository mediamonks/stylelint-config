# Media.Monks - Stylelint Configuration

The official Media.Monks stylelint configuration, based on the
[Frontend Coding Standards](https://github.com/mediamonks/frontend-coding-standards).

| Package                                   | Version                                                                                                                                | Downloads                                                                  |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `@mediamonks/stylelint-config`            | [![](https://img.shields.io/npm/v/@mediamonks/stylelint-config)](https://npmjs.com/@mediamonks/stylelint-config)                       | ![](https://img.shields.io/npm/dm/@mediamonks/stylelint-config)            |
| `@mediamonks/stylelint-config-css`        | [![](https://img.shields.io/npm/v/@mediamonks/stylelint-config-css)](https://npmjs.com/@mediamonks/stylelint-config-css)               | ![](https://img.shields.io/npm/dm/@mediamonks/stylelint-config-css)        |
| `@mediamonks/stylelint-config-scss`       | [![](https://img.shields.io/npm/v/@mediamonks/stylelint-config-scss)](https://npmjs.com/@mediamonks/stylelint-config-scss)             | ![](https://img.shields.io/npm/dm/@mediamonks/stylelint-config-scss)       |
| `@mediamonks/stylelint-config-scss-muban` | [![](https://img.shields.io/npm/v/@mediamonks/stylelint-config-scss-muban)](https://npmjs.com/@mediamonks/stylelint-config-scss-muban) | ![](https://img.shields.io/npm/dm/@mediamonks/stylelint-config-scss-muban) |
| `@mediamonks/stylelint-config-css-in-js`  | [![](https://img.shields.io/npm/v/@mediamonks/stylelint-config-css-in-js)](https://npmjs.com/@mediamonks/stylelint-config-css-in-js)   | ![](https://img.shields.io/npm/dm/@mediamonks/stylelint-config-css-in-js)  |

## Installation

The packages can be installed via `npm`.

```bash
npm install --save-dev @mediamonks/stylelint-config-css
```

```bash
npm install --save-dev @mediamonks/stylelint-config-scss
```

```bash
npm install --save-dev @mediamonks/stylelint-config-scss-muban
```

```bash
npm install --save-dev @mediamonks/stylelint-config-css-in-js
```

To inform stylelint of this configuration, you have to add the `stylelint` property to your
`package.json` file:

```json
"stylelint": {
   "extends": "@mediamonks/stylelint-config-css",
}
```

```json
"stylelint": {
   "extends": "@mediamonks/stylelint-config-scss",
}
```

```json
"stylelint": {
   "extends": "@mediamonks/stylelint-config-scss-muban",
}
```

```json
"stylelint": {
   "extends": "@mediamonks/stylelint-config-css-in-js",
}
```
