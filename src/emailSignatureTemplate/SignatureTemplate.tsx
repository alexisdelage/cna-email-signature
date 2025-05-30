import type { CSSProperties } from 'react';

import { Column } from '@react-email/column';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Markdown } from '@react-email/markdown';
import { Row } from '@react-email/row';

import { buildAbsoluteUrl } from './urls';
import logoSignature from '/logo_cna_small.png';

const emailRegex = /\b[\w.!#$%&'*+/=?^_`{|}~-]+@[\w.-]+\b/g;
const phoneRegex = /(\+\s?)?\b\d[\d\s.-]{8,}\d\b/g;
const websiteWithProtocolRegex = /https?:\/\/[^\s/$.?#*].[^\s]*/g;
const websiteRegex = /www\.[^\s/$.?#].[^\s*]*/g;

function prettify(content: string) {
  return content
    .replaceAll('\n', '\n\n')
    .replace(emailRegex, (email) => `[${email}](mailto:${email})`)
    .replace(
      phoneRegex,
      (phone) => `[${phone}](tel:${phone.replaceAll(' ', '')})`,
    )
    .replace(websiteWithProtocolRegex, (url) => `[${url}](${url})`)
    .replace(websiteRegex, (url) => `[${url}](https://${url})`);
}

interface SignatureTemplateProps {
  markdownContent: string;
}

export function SignatureTemplate({ markdownContent }: SignatureTemplateProps) {
  const content = prettify(markdownContent);

  const imageLink = buildAbsoluteUrl(logoSignature);
  const link = buildAbsoluteUrl('https://www.centraliens-nantes.org');

  const logoWidth = 140;

  return (
    <Row>
      <Column valign="top" width={logoWidth + 20 + (7 + 19)}>
        <Row>
          <Column width={logoWidth + 20}>
            <Link href={link} rel="noopener noreferrer">
              <Img
                src={imageLink} // do not use relative path in emails
                alt="Centrale Nantes Alumni"
                width={logoWidth}
                style={{
                  ...fontStyles,
                  marginRight: 20,
                  marginBottom: 0,
                }}
              />
            </Link>
          </Column>
          <Column valign="middle" width={7 + 19}>
            <div
              style={{
                width: 4,
                height: 41,
                backgroundColor: '#FAB600',
                marginRight: 19,
              }}
            />
          </Column>
        </Row>
      </Column>
      <Column valign="top">
        <Markdown
          markdownCustomStyles={{
            p: {
              ...fontStyles,
            },
            h1: {
              ...fontStyles,
              fontSize: 'medium',
              fontWeight: 'bold',
            },
            hr: {
              width: 25,
              height: 4,
              backgroundColor: '#FAB600',
              border: 'none',
              marginLeft: 0,
            },
            link: {
              color: 'inherit',
              textDecoration: 'none',
            },
          }}
        >
          {content}
        </Markdown>
      </Column>
    </Row>
  );
}

const fontStyles: CSSProperties = {
  margin: 0,
  marginBottom: 2,
  color: '#102648',
  // We can't include fonts family in emails: the font will be applied only
  // if available on the receiver's computer
  fontFamily: "Titillium, 'Titillium Web', Arial, sans-serif",
  fontSize: 'small',
  lineHeight: 'normal',
};
