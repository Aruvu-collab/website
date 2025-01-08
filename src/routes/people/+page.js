//import yaml file
import people from '$lib/people/index.yaml?raw';
import * as YAML from 'yaml';

export const load = () => {
	return {
		people: YAML.parse(people).people
	};
};
