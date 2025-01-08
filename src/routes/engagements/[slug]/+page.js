import engagements from '$lib/engagements/index.yaml?raw';
import * as YAML from 'yaml';

export const load = ({ params }) => {
	const allengagements = YAML.parse(engagements).engagements;
	const chosen_engagement = allengagements.find((p) => p.slug === params.slug);

	if (!chosen_engagement) {
		return {
			status: 404,
			error: new Error('packages not found')
		};
	}

	return {
		chosen_engagement: chosen_engagement
	};
};
