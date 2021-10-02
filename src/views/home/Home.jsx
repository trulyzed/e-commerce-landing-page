import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CTACard, CONTENT_POS } from '~/components/layout/CTA/CTACard';
import { PaginatedProductList } from '~/components/layout/product/ProductList';
import { Reducers } from '~/configs/reducer';

const CTACards = [
  {
    category: 'Collection',
    bigTitle: <span>New <br/>Curtains</span>,
    image: '/images/bg.png',
    imageOverlay: '/images/bg-o.png',
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
    imageOverlay: '/images/bg4-o.png',
  },
  {
    category: 'Membership',
    title: 'New Membership',
    details: '10% Off',
    image: '/images/bg3.png',
    imageOverlay: '/images/bg3-o.png',
  },
];

class Home extends Component {
  render () {
    const { cart } = this.props;

    console.log(cart)

    return (
      <>
        <section className={'wrapper'}>
          <div className={'cta-card-block'}>
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
          </div>
        </section>

        <section className={'wrapper'}>
          <div className={'products-list-block'}>
            <div className={'products-list-block__details'}>
              <p className={'products-list-block__category'}>
                Armchairs
              </p>
              <p className={'products-list-block__title'}>
                New Arrivals
              </p>
            </div>

            <PaginatedProductList />
          </div>
        </section>
      </>

    )
  }
}

const mapStateToProps = (state) => ({
  cart: state[Reducers.CART].cart,
});


export default connect(mapStateToProps)(Home) 