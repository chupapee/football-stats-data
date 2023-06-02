import * as cheerio from 'cheerio';

export const headersParser = <T>(
	$: cheerio.CheerioAPI,
	table: cheerio.Cheerio<cheerio.Element>,
	conditions: (i: number, el: cheerio.Element, headers: T[]) => boolean | void
) => {
	const headers: T[] = [];
	$(table)
		.find('table thead tr th')
		.each((i, el) => conditions(i, el, headers));

	return headers;
};

export const contentParser = (
	$: cheerio.CheerioAPI,
	table: cheerio.Cheerio<cheerio.Element>,
	conditions: (statEl: cheerio.Element, contentList: string[][]) => boolean | void,
	extraProps?: number
) => {
	const content: string[][] = [[]];
	$(table)
		.find('table tbody tr')
		.each((_, playerCell) => {
			$(playerCell)
				.find('tr td')
				.each((_, statEl) => {
					conditions(statEl, content);
				});
		});
	// remove repeated props
	if (extraProps) return content.map((arr) => arr.slice(0, extraProps));
	return content;
};

export const mapContentToPlayer = <H, T>(headers: H[], content: string[][]): T[] => {
	return content.map((item) => {
		const player: any = {};
		headers.forEach((header, index) => {
			player[header] = item[index];
		});
		return player;
	});
};
