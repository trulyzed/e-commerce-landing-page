import { Component } from 'react';
import { connect } from "react-redux";
import { Reducers } from "~/configs/reducer";
import CartImg from '~/assets/images/cart.svg';

export const withFloatingCart = (WrappedComponent) => {
  const mapStateToProps = (state) => ({
    cart: state[Reducers.CART].cart,
  });
  
  class ComponentWithFloatingCart extends Component {
    render () {
      const { cart } = this.props;
      const count = cart.reduce((accu, current) => {
        if (current.quantity) accu += current.quantity;
        return accu;
      }, 0)

      return (
        <>
          <WrappedComponent {...this.props} />
          {cart.length ?
            <div className={'floating-cart-block'}>
              <div className={'floating-cart-block__counter'}>{count}</div>
              <img src={CartImg} alt={"cart"} />
            </div>
          : null}
        </>
      )
    }
  }

  return connect(mapStateToProps)(ComponentWithFloatingCart);
}