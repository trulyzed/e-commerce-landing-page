import { Component } from "react";

export class EmptyState extends Component {
  render () {
    const { errorMessage='' } = this.props;
    return (
      <div className={'empty-state-block'}>
        {errorMessage && <p className={'empty-state-block__error-message'}>{errorMessage}</p>}
      </div>
    )
  }
}