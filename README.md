[![devDependency Status](https://david-dm.org/stevenmathews/khaos-webpack-deps/dev-status.svg)](https://david-dm.org/stevenmathews/khaos-webpack-deps#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# khaos-webpack
A [Khaos](https://github.com/segmentio/khaos) template to start clientside projects with [webpack](https://webpack.github.io/) quickly.
## Benefits
- hotloading dev server
- transpile es6+
- minify and bundle into static files
- prerender known html
- develop on multiple devices with [BrowserSync](https://www.browsersync.io/)
- run [PageSpeed Insights](https://developers.google.com/speed/docs/insights/about) from the console
- better commits with [ghooks](https://github.com/gtramontina/ghooks) + [validate-commit-msg](https://github.com/kentcdodds/validate-commit-msg) + [commitizen](https://github.com/commitizen/cz-cli)
- generate a [changelog](https://github.com/conventional-changelog/conventional-changelog) from commits
- linting with [standard](http://standardjs.com) style
- deploy with [surge](https://surge.sh/)

## Usage
- `$ npm i -g khaos` - install khaos globally
- `$ khaos create stevenmathews/khaos-webpack my-project` - create a new project from this template
- `$ npm i` - install included packages and their dependencies

## Scripts
- `$ npm start` - start the hotloading dev server on [hostname].local:3000
- `$ npm run build` - minify and bundle project into static files
- `$ npm test` - lint using standard and run tests
- `$ npm run commit` - make a validated commit
- `$ npm run changelog` - generate changelog
- `$ npm run deploy` - deploy with surge
- `$ npm run psi` - run pagespeed insights

## Configuration
This template uses [hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack) to generate the webpack.config.js file

- [optional dependencies](https://github.com/HenrikJoreteg/hjs-webpack#optional-dependencies)
- [usage](https://github.com/HenrikJoreteg/hjs-webpack#usage)
- [examples](https://github.com/HenrikJoreteg/hjs-webpack#examples)
- [config options](https://github.com/HenrikJoreteg/hjs-webpack#config-options)
- [developing on multiple devices](https://github.com/HenrikJoreteg/hjs-webpack#developing-on-multiple-devices-at-once)
- [extending hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack#config-options)
- [changing babel config](https://github.com/HenrikJoreteg/hjs-webpack#changing-babel-config)

## Credits
This project is mostly based on [hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack) by [@HenrikJoreteg](http://twitter.com/henrikjoreteg) who has a [course](http://learn.humanjavascript.com) building a native web app from scratch that I found incredibly helpful.
Commits and changelog flow from [TylorS](https://github.com/TylorS).
## License
MIT. Copyright (c) Steve Mathews.
