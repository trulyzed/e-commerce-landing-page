import React, { Component } from 'react';
import { addClass } from '~/utils/app';

export class CTAButton extends Component {
  render () {
    const { text, ctaDark } = this.props;

    return (
      <div className={'cta-button'}>
        <span className={addClass(['cta-button__text', ctaDark && 'cta-button__text--dark'])}>{text}</span>
      </div>
    )
  }
}