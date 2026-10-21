import { mkdir, writeFile, cp, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { projects, additionalProjects } from '../site-data.mjs';
import { poems } from '../poetry-data.mjs';
import { shortBio, fullBio, skills } from '../about-data.mjs';

const allProjects = [...projects, ...additionalProjects];

const out = process.argv.includes('--source') ? '.' : 'dist';
const styleVersion = createHash('sha256').update(await readFile('styles.css')).digest('hex').slice(0, 10);
const scriptVersion = createHash('sha256').update(await readFile('site.js')).digest('hex').slice(0, 10);
const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const link = ({label, url}) => `<a class="text-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}<span class="sr-only"> (opens in a new tab)</span></a>`;

function page(title, body, base = './', description = 'Miles Sanger — Game Designer, Producer & Writer. A collection of games and creative work.', route = '') {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title><meta name="description" content="${esc(description)}">
  <meta name="theme-color" content="#202344"><meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="https://miles-sanger.com/${route}">
  <link rel="canonical" href="https://miles-sanger.com/${route}">
  <link rel="icon" href="${base}assets/favicon.png" type="image/png">
  <link rel="preload" href="${base}assets/eb-garamond-3.ttf" as="font" type="font/ttf" crossorigin>
  <link rel="stylesheet" href="${base}assets/fonts.css"><link rel="stylesheet" href="${base}styles.css?v=${styleVersion}">
  <script src="${base}site.js?v=${scriptVersion}" defer></script>
</head>
<body id="top">
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header wrap">
    <a class="wordmark" href="${base}" aria-label="Miles Sanger home">Miles Sanger<span class="wordmark-dot" aria-hidden="true">.</span></a>
    <nav aria-label="Main navigation"><a href="${base}#work">Games</a><a href="${base}about/">About</a><a href="${base}#writing">Writing</a><a class="nav-contact" href="mailto:behrenha@usc.edu">Contact</a></nav>
  </header>
  ${body}
  <footer class="site-footer wrap"><i class="footer-amp" aria-hidden="true">&amp;</i><p class="footer-tagline">Curiosity <i>&amp;</i> foolishness.</p><small class="footer-copyright">© ${new Date().getUTCFullYear()} Miles Sanger</small></footer>
</body></html>`;
}

function projectRow(p) {
  const cover = p.images[0];
  return `<article class="project reveal${cover ? ' project-with-art' : ''}" data-project="${p.slug}">
    ${cover ? `<a class="project-media media-${esc(cover.kind || 'image')}" href="./games/${p.slug}/" aria-label="View ${esc(p.title)}"><img src="${esc(cover.src)}" alt="${esc(cover.alt)}" width="${cover.width}" height="${cover.height}" loading="lazy"></a>` : `<div class="project-number">${p.number || ''}<span class="number-line"></span></div>`}
    <div class="project-main"><h3><a href="./games/${p.slug}/">${esc(p.title)}</a></h3>
    ${p.description ? `<p class="project-description">${esc(p.description)}</p>` : ''}
    <p class="project-roles">${esc(p.homeRole || p.roles.join(', '))}${p.status === 'In development' ? ' <span class="role-status">In development</span>' : ''}</p>
    ${p.links.length ? `<div class="project-links">${p.links.slice(0,1).map(link).join('')}</div>` : ''}</div>
  </article>`;
}

const home = `<main id="main">
  <section class="hero wrap" aria-labelledby="intro-title">
    <div class="hero-copy">
      <h1 id="intro-title">Miles<br><span class="surname">Sanger<span class="name-period">.</span></span></h1>
      <p class="hero-role">Game Designer, Producer <i class="amp">&amp;</i> Writer</p>
      <a class="hero-cta" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
    </div>
    <figure class="hero-emblem"><div class="emblem-frame"><span class="frame-corner top-left"></span><span class="frame-corner top-right"></span><img src="./assets/reading-fool.png" alt="A reading jester: a fool absorbed in a book" width="760" height="753" fetchpriority="high"><span class="frame-corner bottom-left"></span><span class="frame-corner bottom-right"></span></div><figcaption>A wise <i>fool.</i></figcaption></figure>
  </section>
  <section class="work wrap" id="work" aria-labelledby="work-title"><div class="section-heading reveal"><h2 id="work-title">Selected <i>work.</i></h2></div><div class="project-list">${projects.map(projectRow).join('')}</div><div class="all-games-link"><a class="text-link" href="./games/">All games <span aria-hidden="true">→</span></a></div></section>
  <section class="about wrap" id="about" aria-labelledby="about-title"><div class="about-label reveal"><h2 id="about-title">About me</h2><img class="about-headshot" src="./assets/miles-sanger-headshot.jpg" alt="Miles Sanger in a sunlit arched walkway" width="5152" height="5813" loading="lazy"></div><div class="about-copy reveal">${shortBio.map(paragraph => `<p>${esc(paragraph)}</p>`).join('')}<a class="text-link more-about" href="./about/">More about me <span aria-hidden="true">→</span></a><div class="bio-links"><a class="text-link" href="./assets/miles-sanger-resume.pdf" download="Miles-Sanger-Resume.pdf">Download résumé <span class="file-type">PDF</span><span aria-hidden="true">↓</span></a><a class="text-link" href="https://www.linkedin.com/in/miles-behrenhausen-sanger" target="_blank" rel="noopener noreferrer">LinkedIn<span class="sr-only"> (opens in a new tab)</span></a></div></div></section>
  <section class="writing wrap" id="writing" aria-labelledby="writing-title"><div class="writing-inner reveal"><div><h2 id="writing-title">Poetry <i>&amp;</i><br> other words.</h2></div><div class="poetry-list">${poems.map(p => `<a class="poem-link" href="./writing/${p.slug}/">${esc(p.title)}</a>`).join('')}<a class="poem-link" href="./assets/poetry/soup-inc.pdf">Soup Inc.</a></div></div></section>
  <section class="contact wrap" id="contact" aria-labelledby="contact-title"><div class="reveal"><h2 id="contact-title">Let’s make<br><i>something.</i></h2><a class="contact-email" href="mailto:behrenha@usc.edu">behrenha@usc.edu</a></div></section>
</main>`;

await mkdir(out, { recursive: true });
await writeFile(`${out}/index.html`, page('Miles Sanger — Game Designer, Producer & Writer', home));
const aboutPage = `<main id="main" class="about-page wrap"><a class="back-link text-link" href="../#about"><span aria-hidden="true">←</span> Home</a><h1>Hi, I’m <i>Miles!</i></h1><div class="about-layout"><aside class="about-portrait"><img src="../assets/miles-sanger-headshot.jpg" alt="Miles Sanger in a sunlit arched walkway" width="5152" height="5813" fetchpriority="high"><div class="portrait-links"><a class="text-link" href="../assets/miles-sanger-resume.pdf" download="Miles-Sanger-Resume.pdf">Download résumé <span class="file-type">PDF</span></a>${link({label:'LinkedIn',url:'https://www.linkedin.com/in/miles-behrenhausen-sanger'})}<a class="text-link" href="mailto:behrenha@usc.edu">behrenha@usc.edu</a></div></aside><div class="long-bio">${fullBio.map(paragraph => `<p>${esc(paragraph)}</p>`).join('')}</div></div><section class="skills-section" aria-labelledby="skills-title"><h2 id="skills-title">Skills</h2><dl class="skills-grid">${skills.map(group=>`<div><dt>${esc(group.category)}</dt><dd>${group.items.map(esc).join(', ')}</dd></div>`).join('')}</dl></section></main>`;
await mkdir(`${out}/about`, { recursive: true });
await writeFile(`${out}/about/index.html`, page('About — Miles Sanger', aboutPage, '../', 'About Miles Sanger, game designer, producer, and writer.', 'about/'));
const archive = `<main id="main" class="games-page wrap"><a class="back-link text-link" href="../#work"><span aria-hidden="true">←</span> Selected work</a><h1>All <i>games.</i></h1><div class="games-archive">${allProjects.map(p => `<article class="archive-game"><h2><a href="./${esc(p.slug)}/">${esc(p.title)}</a></h2><p>${p.roles.map(esc).join(' · ')}</p>${p.period ? `<span class="archive-period">${esc(p.period)}</span>` : ''}</article>`).join('')}</div></main>`;
await mkdir(`${out}/games`, { recursive: true });
await writeFile(`${out}/games/index.html`, page('All Games — Miles Sanger', archive, '../', 'Games by Miles Sanger and collaborators.', 'games/'));
for (const p of allProjects) {
  const next = allProjects[(allProjects.indexOf(p) + 1) % allProjects.length];
  const facts = [['Team', p.team], ['Timeline', p.period], ['Status', p.release]].filter(([,value])=>value);
  const body = `<main id="main" class="project-page wrap"><a class="back-link text-link" href="../"><span aria-hidden="true">←</span> All games</a><section class="project-intro"><h1>${esc(p.title)}<span class="name-period">.</span></h1><p class="detail-roles">${p.roles.map(esc).join(' · ')}</p>${facts.length ? `<div class="detail-facts">${facts.map(([label,value])=>`<div><span>${label}</span><p>${esc(value)}</p></div>`).join('')}</div>` : ''}${p.description ? `<p class="detail-description">${esc(p.description)}</p>` : ''}${p.images.map(img=>`<img class="detail-image detail-${esc(img.kind || 'image')}" src="../../${esc(img.src)}" alt="${esc(img.alt)}" width="${img.width}" height="${img.height}" loading="lazy">`).join('')}<div class="detail-links">${p.links.map(link).join('')}${p.slug === 'pic-peck' && p.links.length === 0 ? '<p class="quiet-label">Demo forthcoming.</p>' : ''}</div></section><div class="project-closing"><span>Next project</span><a href="../${next.slug}/">${esc(next.title)} <span aria-hidden="true">→</span></a></div></main>`;
  await mkdir(`${out}/games/${p.slug}`, { recursive: true });
  await writeFile(`${out}/games/${p.slug}/index.html`, page(`${p.title} — Miles Sanger`, body, '../../', `${p.title} — ${p.roles.join(', ')}. A project by Miles Sanger and collaborators.`, `games/${p.slug}/`));
}
for (const poem of poems) {
  const body = `<main id="main" class="poem-page wrap"><a class="back-link text-link" href="../../#writing"><span aria-hidden="true">←</span> All writing</a><article class="poem"><header><h1>${esc(poem.title)}</h1></header><div class="poem-body">${poem.stanzas.map(stanza => `<p class="stanza">${stanza.map(line => `<span class="verse-line">${esc(line)}</span>`).join('\n')}</p>`).join('\n')}</div><a class="text-link" href="../../${poem.pdf}">Read the original PDF</a></article></main>`;
  await mkdir(`${out}/writing/${poem.slug}`, { recursive: true });
  await writeFile(`${out}/writing/${poem.slug}/index.html`, page(`${poem.title} — Miles Sanger`, body, '../../', `${poem.title}. A poem by Miles Sanger.`, `writing/${poem.slug}/`));
}
await writeFile(`${out}/404.html`, page('Page not found — Miles Sanger', '<main id="main" class="wrap not-found"><p class="eyebrow">404 / A wrong turn</p><h1>A little <i>lost?</i></h1><a class="text-link" href="https://miles-sanger.com/">Return home →</a></main>'));
if (out !== '.') {
  for (const item of ['assets', 'styles.css', 'site.js', '.nojekyll', 'CNAME', 'robots.txt', 'sitemap.xml']) await cp(item, `${out}/${item}`, { recursive: true });
}
console.log(`Built homepage, About page, games index, ${allProjects.length} project pages, ${poems.length} poetry pages, and 404 page in ${out}`);




