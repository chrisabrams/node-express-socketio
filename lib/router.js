module.exports = function(express, server, settings) {

    //Show all errors and keep search engines from using robots.txt
    server.configure('development', function() {
        server.use(express.errorHandler({
            'dumpExceptions': true,
            'showStack': true
        }));
        server.all('/robots.txt', function(req,res) {
            res.send('User-agent: *\nDisallow: /', {'Content-Type': 'text/plain'});
        });
    });

    //Suppress errors, allow all search engines
    server.configure('production', function() {
        server.use(express.errorHandler());
            server.all('/robots.txt', function(req,res) {
            res.send('User-agent: *', {'Content-Type': 'text/plain'});
        });
    });

    var loader = function(settings, req, res, controller, action) {
        var load,
            path;

        //If there isn't a controller, load default
        if(!controller) {
            controller = settings.controllers.default;
        }

        //If there isn't an action, load default
        if(!action) {
            action = 'index';
        }

        path = '../controllers/' + controller;
        load = require(path)(req, res);
        load[action]();
    };

    //Base url
    server.get('/', function(req, res) {
        loader(settings, req, res);
    });

    //Basic url routing to controller
    server.get('/:controller', function(req, res) {
        var controller = req.params('controller');
        loader(settings, req, res, controller);
    });

    //Basic url routing to controller and optionally method
    server.get('/:controller/:action', function(req, res) {
        var action     = req.params('action'),
            controller = req.params('controller');
        loader(settings, req, res, controller, action);
    });

    //404
    server.get('*', function(req, res) {
        if(req.accepts('html')) {
            res.status(404);
            res.render(settings.themes[settings.theme].errors.notfound, {
                title: 'Not Found'
            });
        }
    });
}