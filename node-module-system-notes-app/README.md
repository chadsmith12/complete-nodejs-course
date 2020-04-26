## Node Module System - Notes App

In this section you learn about the node module system and create a basic Notes App to learn about about using the node module system.

The module system is core of node. This is how you load in and use different parts of the node library inside of your node applications. This is also how you load in your own and third party modules into your applications.

---

### Loading Node Modules
In node you load in modules using `require`. You assign what require returns into a variable.

Example: to load in the fs module from node: `const fs = require('fs');`

What you call the variable you load in from the require can be anything.
 
#### ES Modules
By default node uses `require` to load in modules. Node has expperimental support for the ESM module loader.

In the `package.json` you can set the `type` to `module`. With this you can then load in modules using:

```js
import fs from 'fs'
```

---

### Loading User Modules
You can define your own modules to seperate  your code out.  When you require your own file you must reference it by the file path. The example below will load in the `utils.js` file/module that lives in the same directory.

`require('./utils.js')`

You can also leave out the the `.js` extension when loading modules: `require('./utils')`.

#### Exports
If you need to access something like a variable outside a file then you can export it using `module.exports`. What  ever you assign `module.exports` is what the return value will be when you `require` the module. Example:

```js
// inside utils.js
const msg = "Hello World";
module.exports = msg;

// inside of app.js
const msg = require('./utils');
console.log(msg); // will print out "Hello World"
```

---

### Loading NPM Modules
You don't have to reinvent the wheel for things that node doesn't have. There are a lot of things that commonly need to be done that other people have already written that you can use. With that you can use modules from NPM to load in third party modules that other people have created.

To use these, first you will need to have initialized your project to use NPM. You can do that with:

`npm init`

This will ask you specific questions about your npm package. You can customize these or do your own. Afterwards you will get a `package.json` in your directory.

You can find packages you want to work with at https://www.npmjs.com

*Install Packages*
You can install third party packages using npm with `npm install`. 

Here is an example of installing the npm package, `validator`

`npm i validator`;

You can see the full documentation of running npm commands here: https://docs.npmjs.com/cli-documentation/


---
## Examples

### File System Example
The `file-system-example.js` shows the basic examples of using the file system module. It shows writing text to a file and also appending text to a file.
