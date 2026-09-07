# Danny Liche Web Makers

A responsive static website for Danny Liche Web Makers.

## Files
- `index.html` — website structure/content
- `styles.css` — responsive styling
- `script.js` — settings and mobile navigation
- `images/logo.png` — supplied logo
- `images/background.jpg` — supplied web-development background

## Security-conscious features
- Content Security Policy meta header
- No third-party JavaScript or external libraries
- Separate HTML/CSS/JS files
- `object-src 'none'` and restricted `base-uri`
- Limited form input lengths
- No passwords or sensitive data collected
- Responsive and accessible focus states

For production hosting, also configure security headers at the hosting/server level (especially CSP, HSTS, `X-Content-Type-Options`, `Permissions-Policy`, and appropriate frame protections). A static site cannot guarantee security by itself.
