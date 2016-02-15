# khaos-webpack
A [Khaos](https://github.com/segmentio/khaos) template to start clientside projects with [webpack](https://webpack.github.io/) quickly.
## Benefits
- hotloading dev server
- transpile es6+
- minify and bundle into static files
- prerender known html
- develop on [multiple devices](https://github.com/HenrikJoreteg/hjs-webpack#developing-on-multiple-devices-at-once) at once

## Usage
- `$ npm i -g khaos` - install khaos globally
- `$ khaos create stevenmathews/khaos-webpack my-project` - create a new project from this template
- `$ npm i` - install included packages and their dependencies

## Scripts
- `$ npm start` - start the hotloading dev server on [hostname].local:3000
- `$ npm run build` - minify and bundle project into static files

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
## License
MIT. Copyright (c) Steve Mathews.