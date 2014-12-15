var test = require('tap').test;
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
    assert.equal(actual[0].positions, 1);
    assert.end();
});

test('two collided events', function (assert) {
    var actual = order([
        {start: 0, end: 2},
        {start: 1, end: 3}
    ]);

    assert.equal(actual[0].positions, 2);
    assert.end();
});

test('facebook test', function (assert) {
    var actual = order([
        {start: 540, end: 600},
        {start: 560, end: 620},
        {start: 610, end: 670}
    ]);

    assert.equal(actual[0].positions, 2);
    assert.end();
});

test('Stairs with 5 events', function (assert) {
    var actual = order([
        {start: 0, end: 10},
        {start: 5, end: 15},
        {start: 10, end: 20},
        {start: 15, end: 25},
        {start: 20, end: 30}
    ]);

    assert.equal(actual[0].positions, 2);
    assert.end();
});

test('generated two', function (assert) {
    var data = [
        { start: 74, end: 394 },
        { start: 83, end: 110 },
        { start: 96, end: 433 },
        { start: 222, end: 343 },
        { start: 267, end: 615 },
        { start: 386, end: 648 },
        { start: 389, end: 522 },
        { start: 562, end: 687 },
        { start: 609, end: 720 },
        { start: 640, end: 687 }
    ];

    var actual = order(data);

    console.log(actual);

    assert.equal(actual[0].positions, 5);
    assert.end();
});
