var React = require('react');

var CalendarEvent = React.createClass({
    render: function () {
        var height = this.props.end - this.props.start;
        var width = this.props.width || 600;
        var top = this.props.start;
        var position = this.props.position || 0;

        var eventStyle = {
            height: height + 'px',
            width: width + 'px',
            left: (width * position) + 'px',
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
