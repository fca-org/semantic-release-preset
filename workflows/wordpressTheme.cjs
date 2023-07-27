function wordpressTheme(uncompiledCSSFile) {
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
		['semantic-release-version-bump', {
			"files": ['style.css', uncompiledCSSFile ],
	  }],
		'@semantic-release/npm',
		['@semantic-release/git', {
			"assets": ["package.json", "package-lock.json", "style.css", uncompiledCSSFile ],
			"message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
		}],
		"@semantic-release/github"
	]
}

module.exports = wordpressTheme;
