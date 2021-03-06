const querystring = require("querystring")
const vscode = require("vscode")
const tf = require("../vscode-tfs").tf
const ui = require("../ui")
const parse = require("../tf/parse")

const tfWorkfold = fsPath =>
	tf(["workfold", fsPath]).then(res => parse.info(res.stdout))

const tfInfo = fsPath =>
	tf(["info", fsPath]).then(res => parse.info(res.stdout))

module.exports = async function openInBrowser(document) {
	ui.showStatus("TFS: Retrieving file info...")
	const [workfold, info] = await Promise.all([
		tfWorkfold(document.uri.fsPath),
		tfInfo(document.uri.fsPath)
	])

	if (!info.localInformation.serverPath) {
		await ui.showErrorMessage(`The file is not under version control`)
		return
	}

	const url = vscode.Uri.parse(workfold.collection + "/_versionControl").with({
		fragment: querystring.stringify({
			path: info.localInformation.serverPath
		})
	})
	ui.showStatus("TFS: Opening in browser...")
	await vscode.commands.executeCommand("vscode.open", url)
	ui.showStatus()
}
