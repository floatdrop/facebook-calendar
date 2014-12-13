var test = require("tap").test;
var order = require('../lib/events').order;

test('empty test', function (assert) {
    var actual = order([]);
    var expected = [];
    assert.deepEqual(actual, expected);
    assert.end();
});

test('single event', function (assert) {
    var actual = order([
        {start: 0, end: 1}
    ]);

    var expected = [
        {start: 0, end: 1, position: 0}
    ];

    assert.deepEqual(actual, expected);
    assert.end();
});

test('two collided events', function (assert) {
    var actual = order([
        {start: 0, end: 2},
        {start: 1, end: 3}
    ]);

    var expected = [
        {start: 0, end: 2, position: 0},
        {start: 1, end: 3, position: 1}
    ];

    assert.deepEqual(actual, expected);
    assert.end();
});

test('facebook test', function (assert) {
    var actual = order([
        {start: 540, end: 600},
        {start: 560, end: 620},
        {start: 610, end: 670}
    ]);

    var expected = [
        {start: 540, end: 600, position: 0},
        {start: 560, end: 620, position: 1},
        {start: 610, end: 670, position: 0}
    ];

    assert.deepEqual(actual, expected);
    assert.end();
});
