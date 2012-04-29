module.exports = function(server) {
	server.dynamicHelpers({
		session: function(req, res) {
			return req.session;
		}
	});
};