var React = require('react');

var CalendarEvent = React.createClass({
    render: function () {
        var height = this.props.end - this.props.start;
        var top = this.props.start;

        var eventStyle = {
            height: height + 'px',
            width: '600px',
            top: top + 'px'
        };

        return (
            <div className="calendar--event" style={eventStyle}>
                <dl>
                    <dt>Sample Item</dt>
                    <dd>Sample Location</dd>
                </dl>
            </div>
        )
    }
});

module.exports = CalendarEvent;
