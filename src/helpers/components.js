const statusBar = ({ text }) => {
  {this.props.statusText ? <div className='alert alert-info'>{text}</div> : ''}
}

export statusBar;
