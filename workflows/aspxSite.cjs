function aspxSite() {
	return [
		['@semantic-release/commit-analyzer', {
			"releaseRules": [
				{ "type": "ci", "release": "patch" },
				{ "type": "docs", "release": "patch" },
				{ "type": "refactor", "release": "minor" },
				{ "type": "style", "release": "patch" },
				{ "breaking": true, "release": "major" },
			]
		}],
		'@semantic-release/release-notes-generator',
		'@semantic-release/npm',
		['@semantic-release/git', {
			"assets": ["package.json", "package-lock.json"],
			"message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
		}],
		"@semantic-release/github"
	]
}

module.exports = aspxSite;
