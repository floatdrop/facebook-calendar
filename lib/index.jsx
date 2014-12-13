/* global window */

var CalendarEvent = require('lib/event.jsx!');
var React = require('react');
var $ = require('jquery');
var group = require('./group');

(window || global).layOutDay = module.exports = function (events) {
    var result = group(events).map(function (e) {
        return React.createElement(CalendarEvent, e);
    });

    React.render((
        <div>
            {result}
        </div>
    ), $(".calendar--events")[0]);
};
