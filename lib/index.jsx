var CalendarEvent = require('lib/event.jsx!');
var React = require('react');
var $ = require('jquery');
var group = require('./events').group;
var order = require('./events').order;

module.exports = function (events) {
    var result = [];

    function reactify(group) {
        group.forEach(function (e) {
            result.push(React.createElement(CalendarEvent, e));
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
