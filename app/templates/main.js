<% if (customData.includeBrowserify) { %>/**
 * Load Dependencies
 * ==================
 *
 * Get Browserify Modules
 */
var modules = require('./modules/modules');

/**
 * Core Modules Init
 * =================
 */
modules.sampleModule.init();
<% } else { %>
	$(function() {
		console.log('OH HELLO!');
	})();
<% } %>
