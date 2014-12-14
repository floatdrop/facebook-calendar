var test = require('tap').test;
var fit = require('../lib/events').fit;

var event = { start: 10, end: 20};

test('fit to empty set', function (assert) {
    assert.ok(fit(event, []));
    assert.end();
});

test('fit to with separate event', function (assert) {
    assert.ok(fit(event, [{start: 30, end: 40}]));
    assert.end();
});

test('fit between events', function (assert) {
    assert.ok(fit(event, [{start: 0, end: 5}, {start: 30, end: 40}]));
    assert.end();
});

test('dont fit with colliding event', function (assert) {
    assert.notOk(fit(event, [{start: 15, end: 25}]));
    assert.notOk(fit(event, [{start: 5, end: 15}]));
    assert.end();
});
