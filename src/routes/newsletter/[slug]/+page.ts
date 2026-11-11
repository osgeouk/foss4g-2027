import { error } from '@sveltejs/kit';
import Editions, { getEditionHtml, webVersion } from '$lib/newsletter';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => Editions.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
  const edition = Editions.find(({ slug }) => slug === params.slug);
  const source = getEditionHtml(params.slug);

  if (!edition || !source) error(404, 'Newsletter edition not found');

  return { edition, html: webVersion(source) };
};
