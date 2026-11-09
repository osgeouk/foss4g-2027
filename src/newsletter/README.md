# FOSS4G 2027 Newsletter

Newsletter editions are written as HTML emails in this folder, reviewed through pull requests, and sent through the FOSS4G Mailchimp account. Every edition is also published on the website at [/newsletter](https://foss4g2027.org/newsletter).

## Files

| Path                                  | Purpose                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------ |
| `src/newsletter/template.html`        | Starting point for a new edition: header, content blocks, sponsors and footer  |
| `src/newsletter/editions/<slug>.html` | One file per edition. This is the exact HTML pasted into Mailchimp             |
| `src/lib/newsletter.ts`               | List of editions (slug, date, title, tagline, summary) for the website         |
| `static/newsletter/images/`           | Images used in emails, served from `https://foss4g2027.org/newsletter/images/` |

## Creating a new edition

1. Create a branch, e.g. `newsletter-2027-01`.
2. Copy `template.html` to `editions/<slug>.html`. Use the year and month as the slug, e.g. `2027-01`.
3. Replace the `{{...}}` placeholders (subject, preview text, slug, month, headline) and build the content from the blocks in the template.
4. Check the sponsors section matches `src/lib/sponsors.ts`. When sponsors change, update the logos in the template as well, so future editions pick them up.
5. Put new images in `static/newsletter/images/`. Keep them under 1200px wide and reference them with the full `https://foss4g2027.org/newsletter/images/...` URL, because email clients need absolute URLs.
6. Add the edition to the top of the list in `src/lib/newsletter.ts`. Its `tagline` is shown in the news banner on the landing page, linking to the edition.
7. Preview with `npm run dev` at `/newsletter/<slug>`, then open a pull request.

## Sending an approved edition

1. Merge the pull request and wait for the site to deploy, so that the images are online.
2. In Mailchimp, create a regular email campaign and choose **Code your own → Paste in code**.
3. Paste the full contents of `editions/<slug>.html`.
4. Set the subject line to match the `<title>` and the preview text to match the hidden preheader.
5. Send a test email and check it on desktop and mobile, then send or schedule the campaign.

## Email HTML rules

- Use tables for layout and inline styles. Many email clients strip `<style>` blocks and ignore modern CSS.
- Content wrapped in `<!-- mailchimp-only -->` and `<!-- /mailchimp-only -->` is removed on the website. Use it for Mailchimp merge tags such as `*|UNSUB|*` and for the "view in browser" link.
- Mailchimp requires the unsubscribe link and postal address (`*|HTML:LIST_ADDRESS_HTML|*`) in the footer. Do not remove them.
- These files are excluded from Prettier so formatting does not change the email output.
