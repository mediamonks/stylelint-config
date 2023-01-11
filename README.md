# Media.Monks - Stylelint Configuration

The official Media.Monks stylelint configuration, based on the
[Frontend Coding Standards](https://github.com/mediamonks/frontend-coding-standards).

## Installation

The packages can be installed via `npm`.

```bash
npm install --save-dev @mediamonks/stylelint-config-css @mediamonks/stylelint-config
```

```bash
npm install --save-dev @mediamonks/stylelint-config-scss @mediamonks/stylelint-config
```

```bash
npm install --save-dev @mediamonks/stylelint-config-scss-muban @mediamonks/stylelint-config-scss @mediamonks/stylelint-config
```

```bash
npm install --save-dev @mediamonks/stylelint-config-css-in-js @mediamonks/stylelint-config
```

To inform stylelint of this configuration, you have to add the `stylelint` property to your
`package.json` file:

```json
"stylelint": {
   "extends": [
      "@mediamonks/stylelint-config",
      "@mediamonks/stylelint-config-css"
   ]
}
```

```json
"stylelint": {
   "extends": [
      "@mediamonks/stylelint-config",
      "@mediamonks/stylelint-config-scss"
   ]
}
```

```json
"stylelint": {
   "extends": [
      "@mediamonks/stylelint-config",
      "@mediamonks/stylelint-config-scss",
      "@mediamonks/stylelint-config-scss-muban"
   ]
}
```

```json
"stylelint": {
   "extends": [
      "@mediamonks/stylelint-config"
      "@mediamonks/stylelint-config-css-in-js"
   ]
}
```
