// Standings
export interface ITeamStat {
	Rank: string;
	Squad: string;
	'Matches Played': string;
	Wins: string;
	Draws: string;
	Losses: string;
	'Goals For': string;
	'Goals Against': string;
	'Goal Difference': string;
	Points: string;
	'Points/Game': string;

	xG?: string;
	'xG Allowed'?: string;
	'xG Difference'?: string;
	'xG Difference/90'?: string;

	'Last 5': string;
	'Attendance/Game': string;
	'Top Team Scorer': string;
	Goalkeeper: string;
	Notes: string;
}

export type IStandings = ITeamStat[];

// Players
export interface IPlayerStats {
	Rk: string;
	Player: string; // full name
	Nation: string;
	Position: string;
	Squad: string;
	'Current age': string;

	'Matches Played': string;
	Starts: string;
	Minutes: string;
	'90s Played': string;

	Goals: string;
	Assists: string;
	'Goals + Assists': string;
	'Non-Penalty Goals': string;

	'Penalty Kicks Made': string;
	'Penalty Kicks Attempted': string;

	'Yellow Cards': string;
	'Red Cards': string;

	xG: string;
	'Non-Penalty xG': string;
	xAG: string;
	'npxG + xAG': string;

	'Progressive Carries': string;
	'Progressive Passes': string;
	'Progressive Passes Rec': string;

	// stat per 90 minutes
	'Goals/90': string;
	'Assists/90': string;
	'Goals + Assists/90': string;
	'Non-Penalty Goals/90': string;
	'Non-Penalty Goals + Assists/90': string;
	'xG/90': string;
	'xAG/90': string;
	'xG + xAG/90': string;
	'npxG/90': string;
}
