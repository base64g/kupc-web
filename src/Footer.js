import React, { Component } from 'react';
import './Footer.css'
import Data from './data';

class Footer extends Component {
  render() {
    const {contact} = Data;
    return (
      <ul className="Footer">
        {contact.mail ?
          <li>Mail: {contact.mail.replace(/@/, ' [at] ')}</li>
        : ''}
        {contact.twitter ?
          <li>Twitter: <a href={`https://twitter.com/${contact.twitter}`}>{contact.twitter}</a></li>
        : ''}
      </ul>
    );
  }
}

export default Footer;
