# generator-kristy

> Just playing around with a custom [Yeoman](http://yeoman.io) generator.

## What does it do?

Not a lot so far.

## How to use this amazing tool

This ain't no registered NPM module, so we'll just be using it locally. Grab the project files and let's DO THIS.

### Install Yeoman
Firstly, you need yeoman to be installed globally, so do that (or don't if you already have it, obvs):

`npm install -g yo`

### Install the Node Modules

make sure you're in the generator directory (awks) and then run this:

`npm install`

### Something to do with Symlinks.

again, in the generator directory, do this:

`npm link`

I can't remember why. Probably should find out why. I think it's so we can run the generator from anywhere? Yeah, maybe that.

### Run (for your life)

We are ready to BLOW MINDS. Create a directory somewhere for your new project and cd into it.

Then, let's get generating with our generator:

`yo kristy`

Then watch the magic happen. How disappointing.

### Options

To skip the NPM installation, run the generator with the --skip-install flag:

`yo kristy --skip-install`

## TODO

- Normalize Include: is there a way to exclude files being copies to the project dir? Don't want their gruntfile and stuff.
- assemble Grunt task: don't want to copy this over if user said no to assemble. does this.directory() have a param to exclude files?
- Ruby gem installer. Would be nice to automate this but can't get it working (this.spawnCommand()).
- JS: haven't done anything for JS files yet. Maybe we can download jQuery, Modernizr, etc?
- Better GitHub integration (Not sure what's possible yet, best find out eh).
- Populate the Gruntfile with some basic tasks that would be common between projects.
- Run Grunt task after NPM dependencies have been installed.
- Maybe there could be an option to use grunt or gulp?