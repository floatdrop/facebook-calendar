var test = require("tap").test;
var group = require('../lib/events').group;

test('empty test', function (assert) {
    var actual = group([]);
    var expected = [];
    assert.deepEqual(actual, expected);
    assert.end();
});

test('one element', function (assert) {
    var actual = group([{start: 30, end: 150}]);
    var expected = [[{start: 30, end: 150}]];
    assert.deepEqual(actual, expected);
    assert.end();
});

test('two intersected', function (assert) {
    var actual = group([{start: 30, end: 150}, {start: 50, end: 170}]);
    var expected = [[{start: 30, end: 150}, {start: 50, end: 170}]];
    assert.deepEqual(actual, expected);
    assert.end();
});

test('two intersected in wrong order', function (assert) {
    var actual = group([{start: 50, end: 170}, {start: 30, end: 150}]);
    var expected = [[{start: 30, end: 150}, {start: 50, end: 170}]];
    assert.deepEqual(actual, expected);
    assert.end();
});

test('two separate', function (assert) {
    var actual = group([{start: 30, end: 50}, {start: 70, end: 100}]);
    var expected = [[{start: 30, end: 50}], [{start: 70, end: 100}]];
    assert.deepEqual(actual, expected);
    assert.end();
});

test('facebook test', function (assert) {
    var actual = group([
        {start: 30, end: 150},
        {start: 540, end: 600},
        {start: 560, end: 620},
        {start: 610, end: 670}
    ]);

    var expected = [
        [
            {start: 30, end: 150}
        ],
        [
            {start: 540, end: 600},
            {start: 560, end: 620},
            {start: 610, end: 670}
        ]
    ];

    assert.deepEqual(actual, expected);
    assert.end();
});
