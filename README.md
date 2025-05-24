# Signature Generator

An email signature generator for clubs and organizations.
Feel free to fork it to create your own signature template!

## User features

- Create your own email signature with your organization's logo and design
- Use Markdown to format your signature
- Export your signature into multiple formats (HTML, source code, plain text)

\>\>\> [Test it now!](https://3cn-ecn.github.io/signature-generator) <<<

## How to adapt it for your own organization

- Fork this repository
- Update the signature logo by replacing the `public/logo_signature.png` image
- Change the email signature's design by modifying files in `src/emailSignatureTemplate`
- Optional: change the builder design by modifying files in `src/builderLayout`

## Dev stuff

### Useful commands

- `npm run dev`: Start the development server
- `npm run lint`: Find potential errors and fixes for the code

### Libraries used

- This generator is built with _react_ and _vite_, with _mui_ for the builder design.

- For the email signature's template, we use **react-email** components, which allow maximum compatibility with all email clients (gmail, outlook, etc...).
