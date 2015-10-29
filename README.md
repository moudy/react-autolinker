
# react-autolinker

React component that wraps [Autolinker.js](https://github.com/gregjacobs/Autolinker.js)

#### Usage

```js
const text = 'Foo http://google.com bar http:/twitter.com baz http//google.com'

// Basic
<ReactAutolinker text={text} />

// With options (passes through to Autolinker.js EXCEPT `replaceFn`
const options = {className: 'foo'}
<ReactAutolinker text={text} options={options} />

// Custom per link render (default implementation shown)
const renderLink = (tag) => React.createElement(tag.tagName, tag.attrs, tag.innerHtml)
<ReactAutolinker text={text} renderLink={renderLink} />
```
