export type PokemonTypeListItem = {
	name: string;
	displayName: string;
	styles: {
		bg: {
			primaryColor: string;
			primaryHoverColor: string;
			secondaryColor: string;
			secondaryHoverColor: string;
		};
		text: {
			primaryColor: string;
			primaryHoverColor: string;
			secondaryColor: string;
			secondaryHoverColor: string;
		};
		border: {
			primaryColor: string;
			primaryHoverColor: string;
			secondaryColor: string;
			secondaryHoverColor: string;
		};
		ring: {
			primaryFocusColor: string;
			secondaryFocusColor: string;
		};
		accent: {
			primaryColor: string;
			secondaryColor: string;
		};
	};
};

export type PokemonTypes = {
	[key: string]: PokemonTypeListItem;
};
