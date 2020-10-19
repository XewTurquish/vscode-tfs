const tf = require("../vscode-tfs").tf
const ui = require("../ui")

module.exports = async function diff(document) {
	ui.showStatus(`TFS: Diff...`)
	await tf(["diff", document.uri.fsPath])
}
