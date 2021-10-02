import React, { Component } from 'react';
import { CTACard } from '~/components/layout/CTA/CTACard';
import { PaginatedProductList } from '~/components/layout/product/ProductList';
import { withFloatingCart } from '~/hoc/withFloatingCart';
import { CTACards } from '~/configs/page/home';

class Home extends Component {
  render () {
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


export default withFloatingCart(Home) 