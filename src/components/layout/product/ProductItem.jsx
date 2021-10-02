import { Component } from "react";
import StarIcon from 'assets/images/star.svg';
import PlusIcon from 'assets/images/plus.svg';
import MinusIcon from 'assets/images/minus.svg';
import { addClass } from "~/utils/app";
import { notEmpty } from "~/utils/validation";
import { humanizeDecimal, localeNumber } from "~/utils/number";
import { addToCart, removeFromCart } from "~/store/slices/cartSlice";
import { connect } from "react-redux";
import { Reducers } from "~/configs/reducer";

const DEFAULT_CURRENCY = 'bdt';

class ProductItem extends Component {
  render () {
    const { product, addToCart, removeFromCart, cart } = this.props;
    const savePercentage = notEmpty(product.regular_price) ? ((product.regular_price - product.price) / product.regular_price) * 100 : undefined;
    const cartProduct = cart.find(i => i.id === product.id);

    return (
      <div className={'product-item'}>
        <div className={'product-item__photo-container'}>
          <img className={'product-item__photo-container__photo'} src={product.image_id} alt={product.name} />
          {product.stock_status !== 'instock' || savePercentage ?
            <div className={addClass(['product-item__photo-container__badge', savePercentage && 'product-item__photo-container__badge--with-reward'])}>
              <p>
                {((product.stock_status !== 'instock') && 'Sold Out') || `Save ${humanizeDecimal(savePercentage)}%`}
              </p>
            </div>
            : null
          }
        </div>
        <div className={'product-item__details-container'}>
          <p className={'product-item__title'}>{product.name}</p>
          <div className={'product-item__review'}>
            <img className={'icon product-item__rating-icon'} src={StarIcon} alt={'review'} />
            {product.review_count ?
              <>
                <span className={'product-item__rating'}>{product.average_rating} </span>
                <span className={'product-item__total-reviews'}>({product.review_count})</span>
              </>
              : <span className={'product-item__rating'}>No reviews yet</span>
            }
          </div>
          <div className={'product-item__action-details'}>
            <span className={'product-item__price'}>
              <span className={'product-item__price__currency'}>{product.currency || DEFAULT_CURRENCY} </span>
              {localeNumber(product.price)}
            </span>
            {notEmpty(product.regular_price) && product.regular_price !== product.price ?
              <span className={'product-item__original-price'}>
                <span className={'product-item__original-price__currency'}>{product.currency || DEFAULT_CURRENCY} </span>
                {localeNumber(product.regular_price)}
              </span>
              : null
            }
            <div className={'product-item__action-container'}>
              {cartProduct?.quantity > 0 ?
                <div className={'product-item__action-container__action product-item__action-container__action--minus'} onClick={() => removeFromCart(product)}>
                  <img src={MinusIcon} alt={'remove product'} />
                </div>
                : null
              }
              <div className={'product-item__action-container__action'} onClick={() => addToCart(product)}>
                <img src={PlusIcon} alt={'add product'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state[Reducers.CART].cart
});


const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (payload) => dispatch(addToCart(payload)),
    removeFromCart: (payload) => dispatch(removeFromCart(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)