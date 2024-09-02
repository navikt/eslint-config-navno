# Common configuration for frontend applications by Team Navno

## Installing

`npm install --D @navikt/eslint-config-navno`

## General usage

Reference the eslint config in your project:

In your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@navikt/eslint-config-navno/eslint"
  }
}
```

##  Use in NextJS
Using esling config in your NextJS project:

This package does not include NextJS specific config, so make sure to also add the `eslint-config-next` package to your project:

`npm install --D eslint-config-next`

In your `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["@navikt/eslint-config-navno", "next/core-web-vitals"]
  }
}
```

## Use prettier

Reference the prettier config in your project:

In your `package.json`:

```json
{
  "prettier": "@navikt/eslint-config-navno/prettier"
}
```