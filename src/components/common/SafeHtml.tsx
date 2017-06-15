import * as React from 'react';
import * as sanitize from 'sanitize-html';

export interface Props {
  content: string;
}

export interface HTMLString {
  __html: string;
}

const config = {
  allowedTags: ['h1', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
    'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
    'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'img'
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src', 'alt'],
  },
  // Lots of these won't come up by default because we don't allow them
  selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
  // URL schemes we permit
  allowedSchemes: ['http', 'https', 'mailto'],
  allowedSchemesByTag: {},
  allowProtocolRelative: true
};

function renderSafeHtml(unsafeHTML: string): HTMLString {
  return {
    __html: sanitize(unsafeHTML, config),
  };
}

const SafeHtml = (props: Props) => (
  <span dangerouslySetInnerHTML={renderSafeHtml(props.content)} />
);

export default SafeHtml;