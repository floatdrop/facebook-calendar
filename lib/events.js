module.exports.order = function (group) {
    var rows = [{ end: 0 }];

    group.forEach(function (event) {
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];

            if (event.start >= row.end) {
                event.position = i;
                row.end = Math.max(row.end, event.end);
                return;
            }
        }

        event.position = i;
        rows.push({ end: event.end });
    });

    group.forEach(function (event) {
        event.positions = rows.length;
    });

    return group;
};

module.exports.group = function (events) {
    var result = [];

    events.sort(function (a, b) {
        return a.start - b.start || b.end - a.end;
    });

    var group;
    var groupEnd = -1;

    events.forEach(function (event) {
        // Because we iterating in sorted array,
        // we can check only for start-end intersection
        var intersection = event.start < groupEnd;

        if (!intersection) {
            if (group) { result.push(group); }
            groupEnd = -1;
            group = [];
        }

        group.push(event);
        groupEnd = Math.max(groupEnd, event.end);
    });

    if (group) { result.push(group); }
    return result;
};
