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


