import React, { Component } from 'react';

export default class Root extends Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: this.props.content }} />
          <script src="/javascripts/bundle.js" />
        </body>
      </html>
    );
  }
}
