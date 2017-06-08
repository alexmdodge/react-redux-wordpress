import * as React from 'react';

export interface Props {
  content: string;
}

const SafeHtml = (props: Props) => (
  <div> Safest here </div>
);

export default SafeHtml;