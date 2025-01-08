import people from '$lib/people/index.yaml?raw';
import * as YAML from 'yaml';

export const load = ({ params }) => {
	const allPeople = YAML.parse(people).people;
	const person = allPeople.find((p) => p.slug === params.slug);

	if (!person) {
		return {
			status: 404,
			error: new Error('Person not found')
		};
	}

	return {
		person
	};
};
