import React from 'react';

const StatusBar = ({ text }) => (
  <div>
    { text ? <div className='alert alert-info'>{ text }</div> : null }
  </div>
)

export default StatusBar;
