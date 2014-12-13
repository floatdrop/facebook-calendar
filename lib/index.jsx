/* global window */

var CalendarEvent = require('lib/event.jsx!');
var React = require('react');
var $ = require('jquery');

(window || global).layOutDay = module.exports = function (events) {

    events = events.map(function (event) {
        return React.createElement(CalendarEvent, event);
    });

    React.render((
        <div>
            {events}
        </div>
    ),
        $(".calendar--events")[0]);
};
