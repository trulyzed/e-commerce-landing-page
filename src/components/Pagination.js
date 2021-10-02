import { Component } from "react";
import { CTAButton } from "./layout/CTA/CTAButton";

export class Pagination extends Component {
  render () {
    const { size, total, hasMore, onLoadMore } = this.props;

    return (
      <div className={'load-more-block'}>
        <p className={'load-more-block__text'}>Showing {size} of {total}</p>
        <CTAButton text={'See more'} outline onClick={onLoadMore} disabled={!hasMore} />
      </div>
    )
  }
}