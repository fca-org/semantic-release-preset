![FCA](public/images/fca-logo.png)

# FCA: Semantic Release Preset

This shareable configuration for semantic release is meant to assist with standardizing releases across FCA Technology projects.

[**semantic-release**](https://github.com/semantic-release/semantic-release) shareable config to publish npm packages with [GitHub](https://github.com).

## Plugins

This [shareable configuration](https://github.com/jedmao/semantic-release-npm-github-config/blob/master/.releaserc.json) uses the following plugins:

- [`@semantic-release/commit-analyzer (core plugin)`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator (core plugin)`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/npm (core plugin)`](https://github.com/semantic-release/npm)
- [`@semantic-release/github (core plugin)`](https://github.com/semantic-release/github)
- [`@semantic-release/git`](https://github.com/semantic-release/git)
- [`semantic-release-version-bump`](https://github.com/Automattic/semantic-release-version-bump)

## Summary

- Provides an informative [git](https://github.com/semantic-release/git) commit message for the release commit that does not trigger continuous integration and conforms to the [conventional commits specification](https://www.conventionalcommits.org/) (e.g., "chore(release): 1.2.3 [skip ci]\n\nnotes").
- Automates release tagging and changelog generation in Github.
- Configures headers for changelogs and specification for which conventional commits will be added to the changelog
- Commits the version change in `package.json` and `package-lock.json`.
- Commits version change for other files, such as WordPress plugin meta version (optional).
- Automates updating of comments for various pull requests.

## Install

```bash
$ npm install --save-dev semantic-release @fca-org/semantic-release-preset
```

## Usage

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "@fca-org/semantic-release-preset"
  // Add overrides as needed, but sparingly.
}
```
