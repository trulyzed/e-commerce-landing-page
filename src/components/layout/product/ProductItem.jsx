import { Component } from "react";
import StarIcon from 'assets/images/star.png';

export class ProductItem extends Component {
  render () {
    const { product } = this.props;

    return (
      <div className={'product-item'}>
        <div className={'product-item__photo-container'}>
          <img src={product.photo} alt={product.title} />
        </div>
        <div className={'product-item__details-container'}>
          <p className={'product-item__title'}>{product.title}</p>
          <p className={'product-item__review'}>
            <img className={'icon product-item__rating-icon'} src={StarIcon} alt={'review'} />
            <span className={'product-item__rating'}>{product.rating} </span>
            <span className={'product-item__total-reviews'}>({product.totalReviews})</span>
          </p>
          <p>
            <span className={'product-item__price'}>
              <span className={'product-item__price-currency'}>{product.currency} </span>
              {product.price}
            </span>
            <span className={'product-item__original-price'}>
              <span className={'product-item__original-price-currency'}>{product.currency} </span>
              {product.originalPrice}
            </span>
          </p>
        </div>

      </div>
    )
  }
}