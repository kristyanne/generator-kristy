## <%= customData.siteName %>

<% if (customData.siteDescription) { %>> <%= customData.siteDescription %><% } %>

## Includes
- [grunt](http://gruntjs.com/)
- [sass](http://sass-lang.com/)<% if (customData.includeBourbon) { %>
- [bourbon](http://bourbon.io/)<% } %><% if (customData.includeNormalize) { %>
- [normalize](https://github.com/hail2u/normalize.scss)<% } %><% if (customData.includeAssemble) { %>
- [assemble](http://assemble.io/)<% } %>

## Getting Started

### Install Grunt

This project uses [grunt](http://gruntjs.com/) to build the front-end so if you don't have that installed already, now's your chance:

`npm install -g grunt-cli`

### Install Dependencies

Since you installed this marvellous project using our yeoman generator, it should have installed the NPM modules for you. If that didn't work, then you'll need to do it manually:

`npm install`

### Install Gems

Ruby gem dependencies are installed using [Bundler](http://bundler.io/) and defined in /Gemfile. To install this, type the following:

`gem install bundler`

Once this is installed, we can install our project gems by running the following command in our project root:

`bundle install`

## Grunt Tasks

Each grunt task for this project is split into individual task files which can be found in the /grunt directory. Each of these files has a comment explaining what the task is and how to run it.

However, here's an overview of the build tasks you're gonna be using on a day to day basis:

### Build

If you're running this project for the first time (or if you just want a clean start), then you'll need to run the build task:

`grunt build`

This will clear out the /dist directory, then re-compile everything back into /dist. Then you're ready to run your local webserver...

### Development

`grunt dev`

Starts a live-reloading static dev webserver on localhost and watches for changes.

If you don't want to run the webserver (you may already have a dev env set up) then you'll probably just want to watch for changes. If so, run the watch task:

`grunt watch`<% if (customData.hasProduction) { %>

### Production

This will build everything ready for production to the 'production' path defined in the gruntfile.

`grunt build --env=production`<% } %>

## Editor Helpers/Utilities

### EditorConfig

The ```.editorconfig``` file is included to try and maintain some consistency between our different coding styles and editors.

See [http://editorconfig.org](http://editorconfig.org) for more information on this.

Sublime users can install this package: [https://github.com/sindresorhus/editorconfig-sublime](https://github.com/sindresorhus/editorconfig-sublime)
