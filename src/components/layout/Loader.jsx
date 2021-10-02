import { Component } from "react";
import LoaderImg from '~/assets/images/loader.svg';

export class Loader extends Component {
  render () {
    return (
      <div className={'loader-block'}>
        <img className={'loader-block__loader'} src={LoaderImg} alt="loading" />
      </div>
    )
  }
}