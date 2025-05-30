# CNA Email Signature Generator

An email signature generator for clubs and organizations.
Feel free to fork it to create your own signature template!

## User features

- Create your own email signature with your organization's logo and design
- Use Markdown to format your signature
- Export your signature into multiple formats (HTML, source code, plain text)

\>\>\> [Test it now!](https://3cn-ecn.github.io/signature-generator) <<<

## How to adapt it for your own organization

1. Fork this repository
1. Authorize workflows in the "Actions" tab
1. Setup GitHub Pages: `Settings` > `Pages` > Select under `Source`: "GitHub Actions"
1. Update the `baseUrl` property of the `vite.config.ts` with your repo name
1. Update the signature:
   - Update the signature logo by replacing the `public/logo_signature.png` image
   - Change the email signature's design by modifying files in `src/emailSignatureTemplate`
1. Optional: change the builder design by modifying files in `src/builderLayout`

## Dev stuff

### Useful commands

- `npm run dev`: Start the development server
- `npm run lint`: Find potential errors and fixes for the code

### Libraries used

- This generator is built with _react_ and _vite_, with _mui_ for the builder design.

- For the email signature's template, we use **react-email** components, which allow maximum compatibility with all email clients (gmail, outlook, etc...).
