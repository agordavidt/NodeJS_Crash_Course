# **What is Node.JS**
•	A JavaScript Runtime (NOT a lanaguage or a framework)
•	Built on the V8 JavaScirpt engine (Same as Google Chrome)
•	Written in C++
•	Allows us to run JavaScrit code on the server
•	Other server side technology are PHP and Python


## What to know before Learning Node.JS
•	JavaScript Fundamentals (Objects, Arrays, Conditionals, etc)
•	HTTP (status codes, headers, etc)
•	JSON  (JavaScript Object Notation)
•	Arrow Functions
•	Promises
•	MVC Pattern

### NPM - Node Package Manager
When you download and install node.JS you get npm.
* Used to install 3rd party packages (frameworks, libraries, tools,etc)
* Packagages get stored in the "node_modules" folder
* All dependencies are listed in a "package.json" file
* NPM scripts can be created to run certain tasks such as run a server
***npm init			Generates a package.json file
npm install express		Installs a package locally
npm install -g nodemon		Instals a package gloablly***


### Node Modules
* Node Core Modules (path, fs, http, os)
* 3rd party modules/packages installed via NPM
* Custom modules (files)

***const path = require('path');		core module
const myFile = require('./myfile');		custom module***

## How to use Node.JS
* Download node from nodejs.org
run this command in your terminal ***node --version*** to be sure you have it downloaded.  
* To run JavaScript in the terminal/console use ***node*** command to create a wrapper


