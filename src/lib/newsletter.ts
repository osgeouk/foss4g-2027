import { PUBLIC_BASE_PATH } from '$env/static/public';

// Newsletter editions, newest first.
// Each entry needs a matching HTML file at src/newsletter/editions/<slug>.html
// See src/newsletter/README.md for the full workflow.

export type Edition = {
  slug: string;
  date: string;
  title: string;
  summary: string;
};

const editions: Edition[] = [
  {
    slug: '2026-11',
    date: 'November 2026',
    title: 'Newsletter #1: Getting ready for Bristol',
    summary:
      'Pre-register for childcare, sponsor FOSS4G 2027, super early bird registration opening in January, and an introduction to Bristol.'
  }
];

const html = import.meta.glob('/src/newsletter/editions/*.html', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

export function getEditionHtml(slug: string): string | undefined {
  return html[`/src/newsletter/editions/${slug}.html`];
}

// Parts of an edition wrapped in <!-- mailchimp-only --> ... <!-- /mailchimp-only -->
// (merge tags, "view in browser" link) are only meant for the email and get removed on the website.
// Image URLs are made site-relative so previews work before the images are deployed.
export function webVersion(source: string): string {
  return source
    .replace(/<!--\s*mailchimp-only\s*-->[\s\S]*?<!--\s*\/mailchimp-only\s*-->/g, '')
    .replaceAll(
      'https://foss4g2027.org/newsletter/images/',
      `${PUBLIC_BASE_PATH}/newsletter/images/`
    )
    .replace('<head>', '<head><base target="_blank" />');
}

export default editions;
