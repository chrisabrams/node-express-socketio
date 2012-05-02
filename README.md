# Node, Express & Socket.io
A simple boilerplate node.js, express.js & socket.io

I created this repo as I kept making new node.js projects and was copying resources from different places. Eventually things got to spread out and I couldn't figure out which project had the most up to date setup. I've tried to break things out into their respective config/lib files for easier organization.

You'll need a few things to get started:  
 - [Node.js](https://github.com/joyent/node)  
This setup uses node.js version 0.6.15

If node.js is installed run the following:

	npm install

## Starting the server
	
	npm start

The server can be found at [0.0.0.0:8081](http://0.0.0.0:8081)

##Features
 - View engine is using [Jade](http://github.com/visionmedia/jade)
 - [Theme organizer](#theme)
 - Client/server communication baked into layout.jade using web sockets and the [Socket.io](http://socket.io) library.
 - Repo contains multiple [branches](#branches) with different options/setups

<h3 id="theme">Theme Organization</h3>
The settings file has a basic theme organization. To change the theme just modify:

	theme: 'themename'

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

<h2 id="branches">Branches</h2>
 - [Master](https://github.com/chrisabrams/node-express-socketio) General boilerplate setup.
 - [MVC](https://github.com/chrisabrams/node-express-socketio/tree/MVC) Basic routing to controller from URL segments