function length(positions) {
    var i = 0;
    for (var p = 0; p < positions.length; p++) {
        var position = positions[p];

        for (var k in position) {
            if (position[k] === true) { i++; break; }
        }
    }
    return i;
}

function stupidClone(array) {
    return array.slice(0).map(function (obj) {
        var clone = {};
        for (var i in obj) { clone[i] = obj[i]; }
        return clone;
    });
}

function fit(event, events) {
    for (var i = 0; i < events.length; i++) {
        var neighbor = events[i];

        if ((event.start > neighbor.start && event.start < neighbor.end) ||
            (event.end > neighbor.start && event.end < neighbor.end)) {
            return false;
        }
    }
    return true;
}

module.exports.fit = fit;

module.exports.order = function (group) {
    // Start with all events have own positions
    var positions = group.map(function (e, i) {
        var o = {};
        o[i] = true;
        return o;
    });

    var minimal = stupidClone(positions);
    minimal._length = positions.length;

    function dfs() {
        for (var p = positions.length - 1; p > 0; p --) {
            var position = positions[p];

            for (var eventId in position) {
                if (position[eventId] !== true) { continue; }

                for (var d = p - 1; d >= 0; d --) {

                    var events = Object.keys(positions[d]).filter(Boolean).map(function(id) { return group[id]; });
                    if (!fit(group[eventId], events)) { continue; }

                    // Mutation on
                    positions[d][eventId] = true;
                    positions[p][eventId] = false;

                    dfs();

                    var l = length(positions);
                    if (l < length(minimal)) {
                        minimal = stupidClone(positions);
                        minimal._length = l;
                    }

                    // Mutation off
                    positions[d][eventId] = false;
                    positions[p][eventId] = true;
                }
            }
        }
    }

    dfs();

    // Mark events with positions
    minimal.forEach(function (position, i) {
        for (var eventId in position) {
            if (position[eventId] !== true) { continue; }
            group[eventId].position = i;
            group[eventId].positions = minimal._length;
        }
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
