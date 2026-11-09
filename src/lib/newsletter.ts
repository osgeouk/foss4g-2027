import { PUBLIC_BASE_PATH } from '$env/static/public';

// Newsletter editions, newest first.
// Each entry needs a matching HTML file at src/newsletter/editions/<slug>.html
// See src/newsletter/README.md for the full workflow.

export type Edition = {
  slug: string;
  date: string;
  title: string;
  // One line shown in the news banner on the landing page while this is the latest edition.
  tagline: string;
  summary: string;
};

const editions: Edition[] = [
  {
    slug: '2026-11',
    date: 'November 2026',
    title: 'Newsletter #1: Getting ready for Bristol',
    tagline: 'Getting ready for Bristol: childcare pre-registration and call for sponsors',
    summary:
      'An introduction to Bristol, childcare pre-registration, a call for sponsors, and super early bird registration opening in January.'
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
// Rows with class="mail-chrome" (email header and footer) are hidden unless the page adds the
// "mail-view" class to the iframe document.
// Image URLs are made site-relative so previews work before the images are deployed.
export function webVersion(source: string): string {
  return source
    .replace(/<!--\s*mailchimp-only\s*-->[\s\S]*?<!--\s*\/mailchimp-only\s*-->/g, '')
    .replaceAll(
      'https://2027.foss4g.org/newsletter/images/',
      `${PUBLIC_BASE_PATH}/newsletter/images/`
    )
    .replace(
      '<head>',
      '<head><base target="_blank" /><style>html:not(.mail-view) .mail-chrome { display: none !important; }</style>'
    );
}

export default editions;
