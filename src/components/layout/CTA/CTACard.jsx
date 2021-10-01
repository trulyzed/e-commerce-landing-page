import React, { Component } from 'react';
import { addClass } from '~/utils/app';
import { CTAExplore } from './CTAExplore';

export const CONTENT_POS = {
  BOTTOM_LEFT: 'bottom_left',
  TOP_RIGHT: 'top_right',
};

export class CTACard extends Component {
  render () {
    const { category, title, bigTitle, details, ctaDark, image, contentPos } = this.props;

    return (
      <div className={'cta-card'} style={{backgroundImage: `url(${image})`}}>
        <div className={addClass([
          'cta-card__content',
          contentPos === CONTENT_POS.BOTTOM_LEFT && 'cta-card__content--bottom-left' 
        ])}>
          {category && <p className={'cta-card__category'}>{category}</p>}
          {title && <p className={'cta-card__title'}>{title}</p>}
          {bigTitle && <p className={'cta-card__big-title'}>{bigTitle}</p>}
          {details && <p className={'cta-card__details'}>{details}</p>}
          <CTAExplore
            ctaDark={ctaDark}
          />
        </div>
      </div>
    )
  }
}