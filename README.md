# Typescript Frontent Workflow
This is an example app using a bunch of different modules that will enable advanced client-side app development.
It's great for large scale JavaScript apps. I also include a *Dockerfile* which could be useful for developing
if you don't have Node installed, or don't want to install a bunch of global npm modules.

**Useful for writing code in:**

* [TypeScript](http://www.typescriptlang.org/) for the application

**This includes:**

* [npm](http://npmjs.org/) for all "building" and some frontend dependencies
* [tsd](https://github.com/DefinitelyTyped/tsd) a package manager for TypeScript definitions
* [Bower](http://bower.io/) for some other frontend dependencies
* [Gulp](http://gulpjs.com/) for compiling and building the application
* [Browserify](http://browserify.org/) for ability to use `require` in browser

## Installation

#### Docker
[You can use this Docker image](https://hub.docker.com/r/karlfloersch/typescript-frontend/) and it will take care of installing all the packages for you.  Just use the command provided on the repo and then you can gulp, mocha, tsd, or whatever.


```
$ git clone https://github.com/karlfloersch/typescript-frontend-workflow.git
$ cd typescript-frontend-workflow
$ npm install .
$ bower install
$ tsd install
```

## Build

**Compile js files:**

```
$ npm run compile-js # or use gulp compile-js
```

## Minify

**Minify js files:**

```
$ npm run uglify-js # or use gulp uglify-js
```
