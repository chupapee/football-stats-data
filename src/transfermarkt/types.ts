interface IPlayer {
	Player: string;
	Position: string;
	Club: string;
	Age: string;
}

export interface IBiggestIncreasePlayer extends IPlayer {
	'#': string;
	League: string;
	'%': string;
	Difference: string;
	[key: string]: string;
}

export type FetchQueries = Partial<Record<'minMarketVal' | 'maxMarketVal' | 'minAge' | 'maxAge', number>>;

export interface ILatestUpdatesPlayer extends IPlayer {
	Club: string;
	'New Market Value': string;
	'old market value': string;
	Difference: string;
	'per cent': string;
	'Changed on': string;
}
