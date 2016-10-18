'use strict';

const assert = require('assert');
const Node = require('./index.js');

describe('dsorin-linked-list', function () {
    it('should export constructor', function () {
        assert.strictEqual(typeof Node, 'function', 'Node is not a function');

        const node = new Node(123);
        assert.strictEqual(typeof node.addNext, 'function', 'Node.addNext is not a function');
    });

    it('should throw if argument is not Node instance', function () {
        const node1 = new Node(123);

        assert.throws(function () {
            node1.addNext(1);
        }, 'Should have thrown but undortunately AAA11');
    });
});
