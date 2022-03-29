# Media.Monks - Stylelint Configuration

The official Media.Monks stylelint configuration, based on the
[Frontend Coding Standards](https://github.com/mediamonks/frontend-coding-standards).

## Installation

The configuration can be installed via `npm`.

```bash
npm install --dev @mediamonks/stylelint-config
```

To inform prettier of this configuration, you have to add the `stylelint` property to your
`package.json` file:

```json
"stylelint": {
   "extends": "@mediamonks/stylelint-config"
}
```

Instead of manually editing your `package.json`, you can also utilize the `npm pkg` subcommand:

```bash
npm pkg set stylelint.extends=@mediamonks/stylelint-config
```

## Extending

[Stylelint Configuration Extending](https://github.com/stylelint/stylelint/blob/main/docs/user-guide/configure.md#extends)