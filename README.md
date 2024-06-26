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
$ npm install --save-dev semantic-release @fca/semantic-release-preset
```

## Usage

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

Since `semantic-release` does not currently allow for the extending of the plugins property, it is best to just inject an appropriate, reusable workflow at this time. Workflows will be added as needed to this repo.

Create a file: `release.config.cjs` in the root of your project:

```cjs
const myWorkflow = require("@fca/semantic-release-preset/workflows/myWorkflow.cjs");

const config = {
  extends: "@fca/semantic-release-preset",
  plugins: myWorkflow(),
};

module.exports = config;
```

### Workflows

Standard:

```cjs
const standardWorkflow = require("@fca/semantic-release-preset/workflows/standard.cjs");

const config = {
  extends: "@fca/semantic-release-preset",
  plugins: standardWorkflow(),
};

module.exports = config;
```

ASPX site:

```cjs
const aspxSite = require("@fca/semantic-release-preset/workflows/aspxSite.cjs");

const config = {
  extends: "@fca/semantic-release-preset",
  plugins: aspxSite(),
};

module.exports = config;
```

Node.js script:

```cjs
const nodeScript = require("@fca/semantic-release-preset/workflows/nodeScript.cjs");

const config = {
  extends: "@fca/semantic-release-preset",
  plugins: nodeScript(),
};

module.exports = config;
```

WordPress site:

```cjs
const wpSiteConfig = require("@fca/semantic-release-preset/workflows/wordpressSite.cjs");

const config = {
  extends: "@fca/semantic-release-preset",
  plugins: wpSiteConfig(),
};

module.exports = config;
```

WordPress theme:

```cjs
const wpThemeConfig = require("@fca/semantic-release-preset/workflows/wordpressTheme.cjs");

const config = {
  extends: "@fca/semantic-release-preset",
  plugins: wpPluginConfig("some/directory/with/uncompiled/css/style.css"),
};

module.exports = config;
```

WordPress plugin:

```cjs
const wpPluginConfig = require("@fca/semantic-release-preset/workflows/wordpressPlugin.cjs");

const config = {
  extends: "@fca/semantic-release-preset",
  plugins: wpPluginConfig("my-plugin.php"),
};

module.exports = config;
```
