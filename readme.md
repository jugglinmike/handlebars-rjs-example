# Template Optimization with RequireJS Example

An example project demonstrating how to structure JavaScript applications with
[AMD](https://github.com/amdjs/amdjs-api) and
[Handlebars](http://handlebarsjs.com/) templates using
[RequireJS](http://requirejs.org/) and
[require-handlebars-plugin](https://github.com/SlexAxton/require-handlebars-plugin).

## Setup

1. Install [Node.js](https://nodejs.org)
2. Run `npm install -g bower` (this command may require administrative
   priviledges)
3. Run `npm install`
4. Run `bower install`

## Usage

This application can be run in two different modes:

- development
  - Templates are dynamically requested from their source files and compiled in
    the browser
  - Run via `npm start`
- production
  - The entire application (including compiled templates) is served from a
    single pre-built JavaScript file
  - Run via `NODE_ENV=production npm start`

## License

Copyright (c) 2014 Mike Pennisi  
Licensed under the MIT Expat license.
