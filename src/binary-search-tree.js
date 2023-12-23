const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
* Implement simple binary search tree according to task description
* using Node from extensions

*/
class BinarySearchTree {
	constructor() {
		this.mainNode = null;
	}

	root() {
		return this.mainNode;
	}

	add(data) {
		function addData(node, data) {
			if (!node) {
				node = new Node(data);
			}

			if (node.data > data) {
				node.left = addData(node.left, data);
			} else if (node.data < data) {
				node.right = addData(node.right, data);
			}
			return node;
		}
		return (this.mainNode = addData(this.mainNode, data));
	}

	has(data) {
		function isTreeHasValue(node, data) {
			if (!node) {
				return false;
			}
			if (node.data === data) {
				return true;
			} else if (node.data > data) {
				return isTreeHasValue(node.left, data);
			} else if (node.data < data) {
				return isTreeHasValue(node.right, data);
			}
		}

		return isTreeHasValue(this.mainNode, data);
	}

	find(data) {
		function searchData(node, data) {
			if (!node) {
				return null;
			} else if (node.data === data) {
				return node;
			} else if (node.data > data) {
				return searchData(node.left, data);
			} else {
				return searchData(node.right, data);
			}
		}

		return searchData(this.mainNode, data);
	}

	remove(data) {
		this.mainNode = remove(this.mainNode, data);

		function remove(node, data) {
			if (!node) {
				node = null;
			} else if (node.data > data) {
				node.left = remove(node.left, data);
				return node;
			} else if (node.data < data) {
				node.right = remove(node.right, data);
				return node;
			}

			if (!node.right && !node.left) {
				return null;
			} else {
				if (!node.left) {
					return node.right;
				} else if (!node.right) {
					return node.left;
				}
			}

			let minRightValue = node.right;

			while (minRightValue.left) {
				minRightValue = minRightValue.left;
			}

			node.data = minRightValue.data;
			node.right = remove(node.right, minRightValue.data);
			return node;
		}

		return this.mainNode;
	}

	min() {
		let node;

		this.mainNode ? (node = this.mainNode) : null;
		while (node.left) {
			node = node.left;
		}

		return node.data;
	}

	max() {
		let node;

		this.mainNode ? (node = this.mainNode) : null;
		while (node.right) {
			node = node.right;
		}

		return node.data;
	}
}

module.exports = {
	BinarySearchTree,
};
