const vscode = require("vscode")
const menu = require("./menu")
const commands = require("./commands")
const only = require("./util/only")
const checkoutOrRevert = only(require("./actions/checkoutOrRevert"))

module.exports.activate = function activate(context) {
	context.subscriptions.push(
		vscode.commands.registerCommand("vscode-tfs.list", menu)
	)
	context.subscriptions.push(
		vscode.commands.registerCommand("vscode-tfs.add", commands.add)
	)
	context.subscriptions.push(
		vscode.commands.registerCommand("vscode-tfs.checkout", commands.checkout)
	)
	context.subscriptions.push(
		vscode.commands.registerCommand("vscode-tfs.undo", commands.undo)
	)
	context.subscriptions.push(
		vscode.commands.registerCommand("vscode-tfs.delete", commands.del)
	)
	context.subscriptions.push(
		vscode.commands.registerCommand("vscode-tfs.diff", commands.diff)
	)
	context.subscriptions.push(
		vscode.commands.registerCommand(
			"vscode-tfs.openInBrowser",
			commands.openInBrowser
		)
	)

	vscode.workspace.onDidChangeTextDocument((event) =>
		checkoutOrRevert(event.document)
	)
}

module.exports.deactivate = function deactivate() {}
