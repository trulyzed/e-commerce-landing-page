import React, { Component } from 'react';
import { CTAButton } from '~/components/layout/CTA/CTAButton';

export class CTAExplore extends Component {
  render () {
    const { ctaDark } = this.props;

    return (
      <CTAButton text={'Explore'} ctaDark={ctaDark} />
    )
  }
}