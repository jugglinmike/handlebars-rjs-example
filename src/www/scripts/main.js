define(function(require) {
	'use strict';
	var mainTmpl = require('hbs!templates/main');
	var div = document.createElement('div');
	div.innerHTML = mainTmpl({ greeting: 'Hello' });
	document.body.appendChild(div);
});
