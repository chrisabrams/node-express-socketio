module.exports = function(req, res) {

	this.index = function() {

        res.render(settings.themes[settings.theme].index, {
            title: 'Index'
        });
	};

	this.world = function() {

		res.render(settings.themes[settings.theme].world, {
            title: 'World'
        });
	};

	return this;
};