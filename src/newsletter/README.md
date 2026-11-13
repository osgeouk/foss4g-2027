# FOSS4G 2027 Newsletter

Newsletter editions are written as HTML emails in this folder, reviewed through pull requests, and sent through the FOSS4G Mailchimp account. Every edition is also published on the website at [/newsletter](https://2027.foss4g.org/newsletter).

## Files

| Path                                  | Purpose                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------ |
| `src/newsletter/template.html`        | Starting point for a new edition: header, content blocks, sponsors and footer  |
| `src/newsletter/editions/<slug>.html` | One file per edition. This is the exact HTML pasted into Mailchimp             |
| `src/newsletter/welcome.html`         | Welcome email sent automatically to new subscribers (not shown on the website) |
| `src/lib/newsletter.ts`               | List of editions (slug, date, title, tagline, summary) for the website         |
| `static/newsletter/images/`           | Images used in emails, served from `https://2027.foss4g.org/newsletter/images/` |

## Creating a new edition

1. Create a branch, e.g. `newsletter-2027-01`.
2. Copy `template.html` to `editions/<slug>.html`. Use the year and month as the slug, e.g. `2027-01`.
3. Replace the `{{...}}` placeholders (subject, preview text, slug, month, headline) and build the content from the blocks in the template.
4. Check the sponsors section matches `src/lib/sponsors.ts`. When sponsors change, update the logos in the template as well, so future editions pick them up.
5. Put new images in `static/newsletter/images/`. Keep them under 1200px wide and reference them with the full `https://2027.foss4g.org/newsletter/images/...` URL, because email clients need absolute URLs.
6. Add the edition to the top of the list in `src/lib/newsletter.ts`. Its `tagline` is shown in the news banner on the landing page, linking to the edition.
7. Preview with `npm run dev` at `/newsletter/<slug>`, then open a pull request.

## Sending an approved edition

1. Merge the pull request and wait for the site to deploy, so that the images are online.
2. In Mailchimp, create a regular email campaign and choose **Code your own → Paste in code**.
3. Paste the full contents of `editions/<slug>.html`.
4. Set the subject line to match the `<title>` and the preview text to match the hidden preheader.
5. Send a test email and check it on desktop and mobile, then send or schedule the campaign.

## Welcome email

`welcome.html` is sent automatically by Mailchimp to everyone who joins the mailing list. Subscribers may receive it months after it was written, so keep it evergreen: link to pages rather than forms, and leave out dates, prices and offers that will go out of date.

To set it up in Mailchimp:

1. Go to **Automations** and create a journey from the **Welcome new subscribers** starting point. The trigger is a contact signing up to the FOSS4G audience.
2. Add a **Send email** step. Set the subject to match the `<title>` and the preview text to match the hidden preheader.
3. Design the email with **Code your own → Paste in code** and paste the full contents of `welcome.html`.
4. Send a test email, then turn the journey on.
5. In **Audience → Signup forms**, switch off Mailchimp's default final welcome email, so new subscribers do not get two welcome emails.

When `welcome.html` changes, for example when sponsors are added, paste the new HTML into the journey's email step. The automation keeps sending the old version until you do.

## Email HTML rules

- Use tables for layout and inline styles. Many email clients strip `<style>` blocks and ignore modern CSS.
- Content wrapped in `<!-- mailchimp-only -->` and `<!-- /mailchimp-only -->` is removed on the website. Use it for Mailchimp merge tags such as `*|UNSUB|*` and for the "view in browser" link.
- Rows with `class="mail-chrome"` (the email header and footer) are hidden on the website. Visitors can show them with the "Mail view" toggle above the edition.
- Mailchimp requires the unsubscribe link and postal address (`*|HTML:LIST_ADDRESS_HTML|*`) in the footer. Do not remove them.
- These files are excluded from Prettier so formatting does not change the email output.
