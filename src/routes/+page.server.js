//import yaml file
import collaborators from '$lib/collaborators/index.yaml?raw';
import * as YAML from 'yaml'

export const load = () => {
    return {
        collaborators: YAML.parse(collaborators).collaborators
    };
};