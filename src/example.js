import React from 'react';
import ReactDOM from 'react-dom/server';

import ReactAutolinker from './index'

const text = `
Foo http://google.com bar http:/twitter.com baz http//google.com
`

console.log(
  ReactDOM.renderToString(<ReactAutolinker text={text} />)
);
