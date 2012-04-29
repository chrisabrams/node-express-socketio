# Node Boilerplate
Node.js, express.js & socket.io

You'll need a few things to get started:  
[Node.js](https://github.com/joyent/node)  
This setup uses node.js version 0.6.15

If node.js is installed run the following:

	npm install

## Starting the server
	
	node server.js

The server can be found at [0.0.0.0:8081](http://0.0.0.0:8081)

##Features
 - View engine is using [Jade](http://github.com/visionmedia/jade)

###Theme Organization
The settings file has a basic theme organization. To change the theme just modify:

	theme: "themename"

To add or modify a theme:

	themes: {
		themename: {
			errors: {
				notfound: 'path/to/404'
			},
			index: '/path/to/index',
			layout: '/path/to/layout'
		}
	}

The idea is to keep it simple when using more than one set of views.

###Nodejitsu Deployment
The package.json file is setup for deployment with [Nodejitsu](http://nodejitsu.com).