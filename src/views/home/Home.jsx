import React, { Component } from 'react';
import { CTACard, CONTENT_POS } from '~/components/layout/CTA/CTACard';

const CTACards = [
  {
    category: 'Collection',
    bigTitle: <span>New <br/>Curtains</span>,
    image: '/images/bg.png',
    contentPos: CONTENT_POS.BOTTOM_LEFT,
  },
  {
    category: 'Collection',
    bigTitle: 'New Collection',
    image: '/images/bg2.png',
    ctaDark: true
  },
  {
    category: 'SALES',
    title: 'SALE UPTO',
    details: '70%',
    image: '/images/bg4.png',
  },
  {
    category: 'Membership',
    title: 'New Membership',
    details: '10% Off',
    image: '/images/bg3.png',
  },
];

export class Home extends Component {
  render () {
    return (
      <section className={'cta-card-block mt-6'}>
        <div className={'cta-card-block__left'}>
          <CTACard
            {...CTACards[0]}
          />
        </div>
        <div className={'cta-card-block__right'}>
          <div className={'cta-card-block__right__top'}>
            <CTACard
              {...CTACards[1]}
            />
          </div>
          <div className={'cta-card-block__right__bottom'}>
            <CTACard
              {...CTACards[2]}
            />
            <CTACard
              {...CTACards[3]}
            />
          </div>
        </div>
      </section>
    )
  }
}