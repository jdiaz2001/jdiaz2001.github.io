# javiercloud.com

Personal portfolio site for Javier Diaz — Cloud Solutions Architect. Static single-page site (HTML/CSS/JS, no framework) hosted at [javiercloud.com](https://javiercloud.com).

## Development

Styles are written in Sass and compiled to `styles/styles.css`, which is committed to the repo since the site is served as static files (no build step at deploy time).

```bash
npm install
npm run build:css   # compile styles/styles.scss -> styles/styles.css
npm run watch:css   # rebuild on change while editing
```

After editing `styles/styles.scss` or `styles/_media.scss`, run `npm run build:css` and commit the updated `styles/styles.css`.
