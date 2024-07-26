import { Base64 } from 'js-base64';
import { Plugin } from 'obsidian';
import * as pako from 'pako';

export default class ShareViaNotepadTabPlugin extends Plugin {
	onload() {
		this.addCommand({
			id: 'share-via-notepad-tab',
			name: 'Current note',
			checkCallback: (checking: boolean) => {
				const file = this.app.workspace.getActiveFile();
				if (file === null) {
					return false;
				}

				if (!checking) {
					(async () => {
						const title = file.basename;
						const body = await file.vault.cachedRead(file);
						const contentLines = [
							`# ${title}`,
							body,
							'---',
							'_Shared with the [Obsidian `Share via Notepad Tab` plugin](https://obsidian.md/plugins?id=share-via-notepad-tab)._'
						];
						const content = contentLines.join('\n\n');
						const serializedContent = this.#serialize(content);
						const url = `https://notepadtab.com/?markdown-preview=true&read-only=true#${serializedContent}`;

						window.open(url, '_blank');
					})();
				}

				return true;
			}
		});
	}

	onunload() {}

	#serialize(value: string): string {
		if (value === '') { return ''; }
		const data = new TextEncoder().encode(value);
		const compressed = pako.deflate(data, { level: 9 });
		return Base64.fromUint8Array(compressed, true);
	}
}
