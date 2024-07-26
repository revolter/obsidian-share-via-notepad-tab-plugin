# Obsidian Share via Notepad Tab Plugin

![Obsidian plugin downloads badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fscambier.xyz%2Fobsidian-endpoints%2Fshare-via-notepad-tab.json)

This is a plugin to share Obsidian (https://obsidian.md) notes via Notepad Tab (https://notepadtab.com).

## Usage

1. Create or select a note.
2. Open the `Command palette` (https://help.obsidian.md/Plugins/Command+palette).
3. Search for the `Share via Notepad Tab: Current note` command.
4. Press <kbd>Enter</kbd>.

## Contributing

### Setup

1. Go to [settings/actions](../../settings/actions).
2. Enable `Read and write permissions` under `Workflow permissions`.
3. Click `Save`.

### Installation

1. Install `Node.js` by following the instructions from
   https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.
2. Install the `Node.js` dependencies by running
   ```sh
   npm install
   ```

### Usage

```sh
npm run dev
```

### Releasing

1. Run `npm version <major/minor/patch>`.
2. Push the created commit by running `git push origin master`.
3. Push the created tag by running `git push origin tag <tag name>`.
4. Optionally add release notes to the created GitHub draft release.
5. Publish the GitHub draft release.

### Submitting

1. Follow the [official instructions](https://docs.obsidian.md/Plugins/Releasing/Submit+your+plugin#Step+3+Submit+your+plugin+for+review).

## License

[MIT](LICENSE)
