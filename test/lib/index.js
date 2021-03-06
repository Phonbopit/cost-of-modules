'use strict';

var test = require('ava');
var helpers = require('../../lib/helpers');
var testData = require('./fixtures/test-data.js');

var moduleSizes = void 0,
    rootDependencies = void 0,
    flatDependencies = void 0,
    allDependencies = void 0;
test.before(function (t) {
    helpers.setup();
});

test.todo('setup was complete');

test('get size for node_modules', function (t) {
    moduleSizes = helpers.getSizeForNodeModules();
    t.deepEqual(moduleSizes, testData.moduleSizes);
});

test('get root dependencies', function (t) {
    rootDependencies = helpers.getRootDependencies();
    t.deepEqual(rootDependencies, testData.rootDependencies);
});

test('attach nested dependencies', function (t) {
    flatDependencies = helpers.attachNestedDependencies(rootDependencies);
    t.deepEqual(flatDependencies, testData.flatDependencies);
});

test('get all dependencies', function (t) {
    allDependencies = helpers.getAllDependencies(flatDependencies);
    t.deepEqual(allDependencies, testData.allDependencies);
});

test.todo('show results');