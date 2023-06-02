import { Parser } from './services/parser';
import { FetchQueries } from './types';
import { fetcher } from './services/fetcher';
import { urlList } from './consts';

const tableSelector = '.items';

const handleError = (error: unknown) => {
	if (error instanceof Error) {
		// eslint-disable-next-line unicorn/prefer-type-error
		throw new Error(error.message);
	}
	throw new Error('Something went wrong, please try again');
};

export class Transfermarkt {
	biggestIncrease = async () => {
		try {
			const page = await fetcher(urlList.biggestIncrease, tableSelector);
			return Parser.biggestIncrease(page);
		} catch (error) {
			handleError(error);
		}
	};

	latestUpdates = async (queries: FetchQueries) => {
		try {
			const page = await fetcher(urlList.latestUpdates(queries), tableSelector);
			return Parser.latestUpdates(page);
		} catch (error) {
			handleError(error);
		}
	};
}

export const transfermarkt = new Transfermarkt();
