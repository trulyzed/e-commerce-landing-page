import { Component } from "react"
import { CTAButton } from "~/components/layout/CTA/CTAButton"
import { PaginationConfig } from "~/configs/pagination"

export const withPagination = (WrappedComponent) => {
  return class PaginatedComponent extends Component {
    state = {
      count: 0,
    }

    loadMore = () => {
      const { count } = this.state;
      this.setState({count: count + 1});
    }

    render () {
      const { count } = this.state;

      return (
        <>
          <WrappedComponent {...this.props} pagination={{count, size: PaginationConfig.size}} />
          <div className={'load-more-block'}>
              <p className={'load-more-block__text'}>Showing 04 of 100</p>
              <CTAButton text={'See more'} outline onClick={this.loadMore} />
          </div>
        </>
      )
    }
  }

}