import React from 'react';
import { auth, db } from '../../firebase';
import withAuthorization from '../Session/withAuthorization';
import AuthUserContext from '../Session/AuthUserContext';

import './index.css';

class LandingPage extends React.Component {

  render() {
    return (
  <div>
    <div class="gallery">
      <a target="_blank" href="/images/image1.jpg">
        <img src="/images/image1.jpg" alt="Fjords" width="300" height="200"/>
      </a>
    </div>

    <div class="gallery">
      <a target="_blank" href="/images/image2.jpg">
        <img src="/images/image2.jpg" alt="Forest" width="300" height="200"/>
      </a>
    </div>


    <div class="gallery">
      <a target="_blank" href="/images/image4.jpg">
        <img src="/images/image4.jpg" alt="Mountains" width="300" height="200"/>
      </a>
    </div>
    <br/>
    </div>
    )}
}

export default LandingPage;

