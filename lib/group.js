module.exports = function (events) {
    var result = [];

    events.sort(function (a, b) {
        return a.start - b.start || b.end - a.end;
    });

    var firstEvent = events.shift();
    var group = [firstEvent];
    var groupStart = firstEvent.start, groupEnd = firstEvent.end;

    function flushGroup() {
        group.forEach(function (e, i) {
            e.width = 600 / group.length;
            e.position = i;
            result.push(e);
        });
    }

    events.forEach(function (event) {
        var intersection = (event.start >= groupStart && event.start < groupEnd);

        if (intersection) {
            groupEnd = event.end;
            group.push(event);
        } else {
            flushGroup();

            group = [event];
            groupStart = event.start;
            groupEnd = event.end;
        }
    });

    flushGroup();
    return result;
};
