const vscode = require("vscode")

const actions = {
	add: require("./actions/add"),
	checkout: require("./actions/checkout"),
	openInBrowser: require("./actions/openInBrowser"),
	undo: require("./actions/undo"),
	delete: require("./actions/delete"),
	diff: require("./actions/diff"),
}

module.exports = {
	add: async function add() {
		const { document } = vscode.window.activeTextEditor || {}
		if (document) {
			return actions.add(document)
		}
	},
	checkout: async function checkout() {
		const { document } = vscode.window.activeTextEditor || {}
		if (document) {
			return actions.checkout(document)
		}
	},
	undo: async function undo() {
		const { document } = vscode.window.activeTextEditor || {}
		if (document) {
			return actions.undo(document)
		}
	},
	openInBrowser: async function openInBrowser() {
		const { document } = vscode.window.activeTextEditor || {}
		if (document) {
			return actions.openInBrowser(document)
		}
	},
	del: async function del() {
		const { document } = vscode.window.activeTextEditor || {}
		if (document) {
			return actions.delete(document)
		}
	},
	diff: async function diff() {
		const { document } = vscode.window.activeTextEditor || {}
		if (document) {
			return actions.diff(document)
		}
	},
}
