import React from 'react'

const StatusBar = ({ text }) => (
  <div>
    {text.length > 0 ? <div className='alert alert-info'>{text}</div> : null}
  </div>
)

export { StatusBar };
