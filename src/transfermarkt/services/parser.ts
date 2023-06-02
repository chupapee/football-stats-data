import * as cheerio from 'cheerio';

import { IBiggestIncreasePlayer, ILatestUpdatesPlayer } from '../types';
import { contentParser, headersParser, mapContentToPlayer } from './helpers';

export class Parser {
	static biggestIncrease(page: HTML) {
		const $ = cheerio.load(page);
		const table = $('.items');

		const headers = headersParser<keyof IBiggestIncreasePlayer>($, table, (i, el, headers) => {
			const text = $(el).text();
			if (text === 'Nat.') return;
			if (i === 1) {
				headers.push(text, 'Position');
				return;
			}
			if (i === 2) {
				headers.push(...text.split('/').map((t) => t.trim()));
				return;
			}
			headers.push(text);
		});

		const content = contentParser(
			$,
			table,
			(statEl, contentList) => {
				const hasNestedTable = $(statEl).find('table').length > 0;
				if (hasNestedTable) return;
				const text = $(statEl).text().trim();
				if (text.length === 0) return;

				if (contentList.at(-1)?.length === 14) {
					contentList.push([]);
				}
				contentList.at(-1)?.push(text);
			},
			-4
		);

		return mapContentToPlayer<keyof IBiggestIncreasePlayer, IBiggestIncreasePlayer>(headers, content);
	}

	static latestUpdates(page: HTML) {
		const $ = cheerio.load(page);
		const table = $('.items');

		const headers = headersParser<keyof ILatestUpdatesPlayer>($, table, (i, el, headers) => {
			const text = $(el).text();
			if (text === 'Nat.') return;
			if (i === 0) {
				headers.push(text as keyof ILatestUpdatesPlayer, 'Position');
				return;
			}
			headers.push(text as keyof ILatestUpdatesPlayer);
		});

		const content = contentParser(
			$,
			table,
			(statEl, contentList) => {
				const hasNestedTable = $(statEl).find('table').length > 0;
				if (hasNestedTable) return;
				const text = $(statEl).text().trim();
				if (text.length === 0) {
					const title = $(statEl).find('a').attr('title')?.trim();
					if (title) contentList.at(-1)?.push(title);
					return;
				}

				if (contentList.at(-1)?.length === 11) {
					contentList.push([]);
				}
				contentList.at(-1)?.push(text);
			},
			-2
		);

		return mapContentToPlayer<keyof ILatestUpdatesPlayer, ILatestUpdatesPlayer>(headers, content);
	}
}
