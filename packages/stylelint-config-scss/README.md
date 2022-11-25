# Media.Monks - @mediamonks/stylelint-config-scss

The official Media.Monks stylelint configuration, based on the
[Frontend Coding Standards](https://github.com/mediamonks/frontend-coding-standards).

## Installation

The configuration can be installed via `npm`.

```bash
npm install --dev @mediamonks/stylelint-config-scss
```

To inform stylelint of this configuration, you have to add the `stylelint` property to your
`package.json` file:

```json
"stylelint": {
   "extends": "@mediamonks/stylelint-config-scss"
}
```

Instead of manually editing your `package.json`, you can also utilize the `npm pkg` subcommand:

```bash
npm pkg set stylelint.extends=@mediamonks/stylelint-config-scss
```
