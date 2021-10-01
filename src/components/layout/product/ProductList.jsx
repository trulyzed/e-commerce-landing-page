import { Component } from "react";
import { ProductItem } from "./ProductItem";

export class ProductList extends Component {
  render () {
    const { products=[] } = this.props;

    return (
      <div className={'product-list'}>
        {products.map(p => (
          <ProductItem
            key={p.id}
            product={p}
          />
        ))}
      </div>
    )
  }
}