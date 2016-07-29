#component-nodes


This boiler environment is has been built with the idea of using **Vue.js** as a component model. Build a component and ship it as an iframe. This is an alternative to using the quite better **vue-cli** taking a similar boilerplate approach and utilising the single file concept of **Vueify**.. but use that, and you'll never learn knowing.

Tricks included:

* Browserify
* Vue
* Vue-router
* Vue-resource
* ES6 (currently disabled)

**Project Enviroments**

The build process has been scripted directly using the CLI and NPM scripts.

#### Dev

`npm start` will boot a server on port 3000 and begin listening to file changes to the usual suspects. Compiles and serves from `./public`

#### Production

`npm build` and find the output in the `./dist` folder

---
