# Test App

Something useful about this app.

## Prerequisites

- [Github CLI](https://cli.github.com/manual/installation)
- [NodeJS](https://nodejs.org/)

## Getting Started

- `git clone git@github.com:kfredin/test-app.git`
- `cd test-app`
- `npm ci`

## Pull Request

- `npm run pr`
- OR
- in your browser go to: `https://github.com/kfredin/test-app/compare/master...<YOUR_BRANCH_HERE>?title=PP-XXXX&template=pull-request-template.md`

## Staging Release

- `npm version {major|minor|patch}`
- `npm run staging`
- OR
- [Staging Release](https://github.com/kfredin/test-app/compare/staging...master?title=Release%20x.y.z&template=release-template.md)

## Production Release

- `npm run production`
- OR
- [Production Release](https://github.com/kfredin/test-app/compare/production...staging?title=Release%20x.y.z&template=release-template.md)

## Copyright

Axcient 2020
