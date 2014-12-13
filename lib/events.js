module.exports.order = function (group) {

};

module.exports.group = function (events) {
    var result = [];

    events.sort(function (a, b) {
        return a.start - b.start || b.end - a.end;
    });

    var group;
    var groupEnd;

    events.forEach(function (event) {
        // Because we iterating in sorted array,
        // we can check only for start-end intersection
        var intersection = event.start < groupEnd;

        if (!intersection) {
            if (group) { result.push(group); }
            group = [];
        }

        group.push(event);
        groupEnd = event.end;
    });

    if (group) { result.push(group); }
    return result;
};
