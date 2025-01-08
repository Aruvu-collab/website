//import yaml file
import work from '$lib/work/index.yaml?raw';
import * as YAML from 'yaml';

export const load = () => {
	return {
		work: YAML.parse(work).work
	};
};
