var CalendarEvent = require('lib/event.jsx!');
var React = require('react');
var $ = require('qwery');
var group = require('./events').group;
var order = require('./events').order;

module.exports = function (events) {
    var result = {};

    var id = 1;
    function reactify(group) {
        group.forEach(function (event) {
            result['event-' + (id++)] = React.createElement(CalendarEvent, event);
        });
    }

    group(events)
        .map(order)
        .map(reactify);

    React.render((
        <div>
            {result}
        </div>
    ), $(".calendar--events")[0]);
};

(window || global || {}).layOutDay = module.exports;
