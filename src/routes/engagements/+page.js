//import yaml file
import engagements from '$lib/engagements/index.yaml?raw';
import * as YAML from 'yaml';

export const load = () => {
	return {
		engagements: YAML.parse(engagements).engagements
	};
};
