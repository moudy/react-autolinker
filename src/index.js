import Autolinker from 'autolinker';
import React from 'react';

export default class ReactAutolinker extends React.Component {
  static propTypes = {
    options: React.PropTypes.object,
    renderLink: React.PropTypes.func
  }
  static defaultProps = {
    options: {},
    renderLink: (tag) => React.createElement(tag.tagName, tag.attrs, tag.innerHtml)
  }
  render() {
    const {
      options,
      text,
      renderLink
    } = this.props;

    const tags = [];
    Autolinker.link(text, {...options, replaceFn: (autolinker, match) => {
      const tag = autolinker.getTagBuilder().build(match);
      tags.push(tag);
      return tag;
    }});

    let _text = text;
    const children = [];
    for(let tag of tags) {
      const parts = _text.split(tag.attrs.href);
      if (tag.attrs && tag.attrs.class) {
        tag.attrs.className = tag.attrs.class;
        delete tag.attrs.class;
      }
      tag.attrs.key = `${tag.attrs.href}-${tags.indexOf(tag)}`
      children.push(parts.shift());
      children.push(renderLink(tag));
      _text = parts.join(tag.attrs.href);
    }

    const content = children.length ? children : text;
    return React.createElement('div', this.props, content);
  }
}

