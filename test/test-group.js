var test = require("tap").test;
var group = require('../lib/group');

test('basic test', function (assert) {
    assert.plan(1);

    var actual = group([
        {start: 30, end: 150},
        {start: 540, end: 600},
        {start: 560, end: 620},
        {start: 610, end: 670}
    ]);

    var expected = [
        {start: 30, end: 150, position: 0, width: 600},
        {start: 540, end: 600, position: 0, width: 300},
        {start: 560, end: 620, position: 1, width: 300},
        {start: 610, end: 670, position: 0, width: 300}
    ];

    assert.deepEqual(actual, expected, 'basic test from facebook');
});
