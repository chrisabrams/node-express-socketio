(function(io, window, undefined) {

	var socket = io.connect("http://localhost");

	socket.on('mysamplefn', function(data) {
		
	});

}(io, window));