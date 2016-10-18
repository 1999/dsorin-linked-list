'use strict';

const assert = require('assert');

function Node(value) {
    this.value = value;
}

Node.prototype.addNext = function (node) {
    assert(node instanceof Node, 'node has unknown type');

    this.next = node;
};

module.exports = Node;