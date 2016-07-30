#component-nodes

Use the HTML5 drag n drop directive. Otherwise nesting components due to z-indexing is ultra hard with the visual nature intended for this type of UI transaction.

**nb** Once drag start has been activated and the clone has been applied, use `$remove()` and update the data model with standard Array methods. 

###TODO
* Update Root data model once target has been dropped, for the case of switching children.
* Global `$vm` **IO** for child nodes to inherit from other Global Nodes, and not just from their repsective parents. 

**Project Enviroments**

The build process has been scripted directly using the CLI and NPM scripts.

#### Dev

`npm start` will boot a server on port 3000 and begin listening to file changes to the usual suspects. Compiles and serves from `./public`

#### Production

`npm build` and find the output in the `./dist` folder

---
