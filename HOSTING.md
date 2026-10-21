# GitHub Pages and Cloudflare

Domain: `miles-sanger.com`
GitHub account: `kiwikiwi7`

Repository: https://github.com/kiwikiwi7/miles-sanger.com

The initial GitHub Actions deployment succeeded on October 21, 2026. The custom domain is set in GitHub, domain ownership is verified, and all six Cloudflare records (four A, one CNAME, one verification TXT) are saved as DNS only. The certificate for https://miles-sanger.com is active and Enforce HTTPS is enabled.

Live checks passed over HTTPS for the homepage, games index, four project pages, two poetry pages, and résumé PDF. Both HTTP and HTTPS requests to www.miles-sanger.com redirect to https://miles-sanger.com/, and HTTP requests to the main domain also redirect to HTTPS. The www CNAME resolves correctly through Cloudflare and Google public DNS.

## GitHub

1. Create a public repository for this portfolio in `kiwikiwi7` and push the project files. Free GitHub Pages requires a public source repository.
2. In the repository, select **Settings → Pages → Source → GitHub Actions**.
3. Run **Actions → Deploy portfolio to GitHub Pages → Run workflow**, or push a change to `main` or `master`.
4. Verify a successful deployment.
5. Verify domain ownership in the account's **Settings → Pages**. GitHub supplies the exact TXT record name and value to add in Cloudflare. Keep this record after verification.
6. In the repository's **Settings → Pages**, set the custom domain to `miles-sanger.com` **before** pointing its DNS at GitHub. With an Actions deployment, GitHub ignores the CNAME file; the repository setting is required.

## Cloudflare DNS

In **miles-sanger.com → DNS → Records**, use these records:

| Type | Name | Content | Proxy status |
| --- | --- | --- | --- |
| A | @ | 185.199.108.153 | DNS only |
| A | @ | 185.199.109.153 | DNS only |
| A | @ | 185.199.110.153 | DNS only |
| A | @ | 185.199.111.153 | DNS only |
| CNAME | www | kiwikiwi7.github.io | DNS only |

Use automatic TTL. Replace any conflicting root website or www parking records. Preserve unrelated mail records and the GitHub verification TXT record. Inspect existing AAAA records too; remove conflicting website records rather than leaving them pointed at another host.

These instructions use DNS-only records so GitHub serves the site and manages HTTPS directly. Cloudflare still registers the domain and serves its DNS.

## Finish

After GitHub's DNS check passes and its certificate is issued, enable **Enforce HTTPS** in Pages settings. Verify the homepage, project and poetry pages, résumé download, and the redirect from `www.miles-sanger.com` to `miles-sanger.com`. DNS propagation and certificate availability can take up to 24 hours.

## Future updates

Edit the site, run `npm run build` and `npm run check`, commit, and push. The workflow builds and deploys automatically. To update the résumé, replace `assets/miles-sanger-resume.pdf` and push the change.

Official reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
