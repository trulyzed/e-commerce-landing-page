import { Component } from "react";
import { connect } from "react-redux";
import { AsyncActionStatus, Reducers } from "~/configs/reducer";
import ProductItem from "./ProductItem";
import { getProducts } from '~/store/slices/productSlice';
import { PaginationConfig } from "~/configs/pagination";
import { Pagination } from "~/components/Pagination";
import { Loader } from "../Loader";
import { addToCart } from "~/store/slices/cartSlice";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: {
        total: props.products.length,
        count: 1,
        hasMore: true,
      }
    }
  }

  componentDidMount() {
    this.initialize();
  }

  initialize = async () => {
    const { getProducts, products } = this.props;
    const { pagination } = this.state;
    if (products.length) return;

    const { payload } = await getProducts();

    this.setState({
      pagination: {
        ...pagination,
        total: payload.length,
        hasMore: this.getPaginationSize() < payload.length,
      }
    });
  }

  handleLoadMore = () => {
    const { pagination } = this.state;
    if (!pagination.hasMore) return;
  
    const count = pagination.count + 1;
    const hasMore = (count * PaginationConfig.size) < pagination.total;

    this.setState({
      pagination: {
        ...pagination,
        count,
        hasMore,
      }
    })
  }

  getPaginationSize = () => {
    const { pagination } = this.state;
    return pagination.count * PaginationConfig.size;
  }

  getPaginatedProducts = () => {
    const { products } = this.props;
    return products.slice(0, this.getPaginationSize());
  }

  render () {
    const { status } = this.props;
    const { pagination } = this.state;

    const products = this.getPaginatedProducts();

    return (
      status === AsyncActionStatus.PENDING ?
      <Loader />
      :
      <>
        <div className={'product-list'}>
          {products.map(p => (
            <ProductItem
              key={p.id}
              product={p} />
          ))}
        </div>

        {pagination.total ?
          <Pagination
            size={this.getPaginationSize()}
            total={pagination.total}
            hasMore={pagination.hasMore}
            onLoadMore={this.handleLoadMore} />
        : null}
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  products: state[Reducers.PRODUCT].products,
  status: state[Reducers.PRODUCT].status,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    addToCart: () => dispatch(addToCart()),
  }
};

export const PaginatedProductList = connect(mapStateToProps, mapDispatchToProps)(ProductList);