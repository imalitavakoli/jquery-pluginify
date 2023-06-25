The "**jQuery Pluginify**" lets you make jQuery plugins fast and easy by the ES6+ syntax.




# Features

- One single *.js* file (`app/_core/pluginify.js`) that lets you create jQuery plugins easy and fast.
- **Ready-to-use samples**.
- The code lets you easily initialize, destroy, call methods, and listen to events.




# Where is the Pluginify code?

The `app/_core/pluginify.js` code is all that you need to use inside your projects. Everything else are just samples and examples.




# Where are the samples?

`app/_core/bundles/jp-all.js` or `app/scripts/jp-all.min.js` are the files that import everything inside themselves and have been fed to the `app/index.html` file.

`app/_core/blocks/plugin-name/plugin-name.js` is a sample plugin (block) that used the Pluginify to get created! You can get inspirations from it to boost-up your own plugin development workflow.

`app/_core/blocks/utils/utils.js` holds some utility functions that you sometimes need when creating different plugins. Such as `toBoolean()` function that converts any variable type to boolean.




# How to concatenate and minify all plugins into one single *.js* file?

You can simply use the `app/_core/bundles/jp-all.js` file as a module inside of your *.html* files to load your separate *.js* files in a server environment. But you can also concatenate and minify all separate JavaScript codes and files into one single *.js* file and feed your *.html* files with just that! To do so, you can simply follow the instruction below.


## Install Required Dependencies

You must first [download and install node.js](https://nodejs.org/download/) (which includes npm) on your machine. npm stands for [node packaged modules](https://www.npmjs.com/) and is a way to manage development dependencies through node.js.

Then, open your Terminal / Command Prompt and run the following commands.  
**TIP!** If you're not so familiar with command line tools yet, [here is a great start](http://webdesign.tutsplus.com/series/the-command-line-for-web-design--cms-777)!


- Install global dependencies: `npm install -g browserify@17.0.0 uglify-js@3.12.1`
- Change directory to this folder on your machine: `cd my/path/to/project`
- Run `npm install` to install local dependencies


## Run/Build the Project

- Run `npm run build` to build your webapp for production
