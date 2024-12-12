# Felles konfigurasjon for frontend-applikasjoner av Team Navno

## Slik installerer du

`npm install -D @navikt/eslint-config-navno`

## Generell bruk

Referer til eslint-konfigurasjonen i `package.json`:

````json
{
  "eslintConfig": {
    "extends": "@navikt/eslint-config-navno/eslint"
  }
}

##  Bruk i NextJS eller andre rammeverk

Denne pakken er relativt rammeverk-agnostisk. Pass på at du har lagt til mellomvare eller plugins som trengs i prosjektet. For NextJS er det feks eslint-config-next:

`npm install -D eslint-config-next`

I `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["@navikt/eslint-config-navno", "next/core-web-vitals"]
  }
}
````

## Slik bruker du config for prettier

Sett opp referanse til Prettier i `package.json`:

```json
{
    "prettier": "@navikt/eslint-config-navno/prettier"
}
```
