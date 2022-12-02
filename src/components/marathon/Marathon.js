import React, { Component } from 'react';

import MarathonAbout from './MarathonAbout';
import MarathonBanner from '../../img/ULEM-MarathonBanner2022.jpg';
export default class Marathon extends Component {
  render() {
    return (
      <div>
        <img
          src={MarathonBanner}
          alt='Marathon'
          className='img-fluid'
          width='100%'
        />
        <div className='container'>
          <br></br>
          <MarathonAbout />
        </div>
      </div>
    );
  }
}
