import * as React from 'react';
import './NoPage.css';
const error = require('./error.png');

const NoPage = () => (
  <div className="page-error">
    <h1> Error <b>404</b></h1>
    <div className="page-error__warning">
      <img src={error} />
    </div>
    <h3> Page could not be found </h3>
  </div>
);

export default NoPage;