var eventsModule = require('./events/events.js'),
    infoBubble = require('./events/infobubble.js');

angular.module('events-module', [])
    .factory('EventsModule', eventsModule)
    .factory('InfoBubbleFactory', infoBubble);

var app = angular.module('components-module', [
	'events-module'
]);

module.exports = app;