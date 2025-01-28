import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		sorgenDerAelteren: [
			{
				kurz: 'Einwanderung',
				lang: 'Einwanderung'
			},
			{
				kurz: 'Lebenshaltung',
				lang: 'Lebenshaltung'
			},
			{
				kurz: 'Wirtschaft',
				lang: 'Wirtschaft'
			},
			{
				kurz: 'Ukraine-Krieg',
				lang: 'Ukraine-Krieg'
			},
			{
				kurz: 'Wohnen&Miete',
				lang: 'Wohnen&Miete'
			},
			{
				kurz: 'Rente',
				lang: 'Rente'
			},
			{
				kurz: 'Gesundheitswesen',
				lang: 'Gesundheitswesen'
			}
		],
		sorgenDerJuengeren: [
			{
				kurz: 'Klima',
				lang: 'Klima'
			},
			{
				kurz: 'Umverteilung',
				lang: 'Umverteilung'
			},
			{
				kurz: 'Bildung',
				lang: 'Bildung'
			},
			{
				kurz: 'Energiewende',
				lang: 'Energiewende'
			},
			{
				kurz: 'Lebenshaltung',
				lang: 'Lebenshaltung'
			},
			{
				kurz: 'Wirtschaft',
				lang: 'Wirtschaft'
			}
		]
	};
};
