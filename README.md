# Miles Sanger

A static portfolio for **miles-sanger.com**, using locally hosted EB Garamond, the supplied reading-fool artwork, and plain HTML/CSS/JavaScript. No external packages are needed to build or run it.

## Preview

Run `node scripts/build.mjs --source`, then `npm run dev`. Open http://127.0.0.1:4173.

## Edit

- Project roles, facts, descriptions, links, and images: `site-data.mjs`.
- `projects` controls the four homepage features, in order. `additionalProjects` holds your selected secondary games; these appear on the separate `/games/` index and have their own project pages.
- Homepage copy and page templates: `scripts/build.mjs`.
- Short homepage bio, full About page biography, and skills: `about-data.mjs`. Headshot: `assets/miles-sanger-headshot.jpg`.
- Colors, typography, responsive layout, and motion: `styles.css`.
- Put screenshots in `assets/`, then add `{ src: 'assets/filename.png', alt: 'Your description' }` to the project's `images` array.
- Add project prose to its `description` field. Blank descriptions render no filler copy.
- Contact currently uses `behrenha@usc.edu` in the template.
- Résumé: replace `assets/miles-sanger-resume.pdf` with your latest PDF, rebuild, and publish. Keep that filename so the download link stays stable. The browser downloads it as `Miles-Sanger-Resume.pdf`.
- Poetry text and stanza breaks: `poetry-data.mjs`. The original PDFs are in `assets/poetry/`; both poems have dedicated reading pages. No résumé has been invented.

After editing, regenerate the preview using `node scripts/build.mjs --source`. `npm run build` creates the deployable `dist/` folder. `npm run check` validates internal links and anchors in that folder.

## GitHub Pages

The site is live at https://miles-sanger.com and hosted with GitHub Pages from https://github.com/kiwikiwi7/miles-sanger.com. The included workflow builds and publishes `dist/` when changes are pushed to `main` or `master`. The active branch is `master`. See `HOSTING.md` for GitHub setup and Cloudflare DNS records.

Set **miles-sanger.com** as the repository's Pages custom domain, verify ownership, and follow GitHub's current DNS instructions at https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site. Enable HTTPS once the certificate is available. The included `CNAME`, canonical links, and sitemap already use miles-sanger.com.

## Asset credits

- **EB Garamond**: SIL Open Font License; see `assets/EB-Garamond-OFL.txt`.
- **Reading fool**: supplied by Miles; public-domain source: https://commons.wikimedia.org/wiki/File:Reading-jester-q75-760x753.png. Its display saturation is reduced with CSS; the supplied file is preserved.
- The ampersands are font glyphs; the favicon is rendered from the actual EB Garamond italic ampersand. No AI-generated art is used.
