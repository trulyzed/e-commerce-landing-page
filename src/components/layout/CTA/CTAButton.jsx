import React, { Component } from 'react';
import { addClass } from '~/utils/app';

export class CTAButton extends Component {
  render () {
    const { text, ctaDark, outline } = this.props;

    return (
      <div className={addClass(['cta-button', outline && 'cta-button--outline'])}>
        <span className={addClass(['cta-button__text', ctaDark && 'cta-button__text--dark'])}>{text}</span>
      </div>
    )
  }
}