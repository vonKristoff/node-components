#component-nodes

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
