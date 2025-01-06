import work from '$lib/work/index.yaml?raw';
import { type } from 'os';
import * as YAML from 'yaml';

export const load = ({ params }) => {
  const allwork = YAML.parse(work).work;
  const packages = allwork.find(p => p.slug === params.slug);

  if (!packages) {
    return {
      status: 404,
      error: new Error('packages not found')
    };
  }

  return {
    packages
  };
};
