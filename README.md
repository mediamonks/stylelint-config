# Media.Monks - Stylelint Configuration

The official Media.Monks stylelint configuration, based on the
[Frontend Coding Standards](https://github.com/mediamonks/frontend-coding-standards).

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
