import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import renderHTML from 'react-render-html'

class ChapterPreview extends Component {
  render() {
    return (
      <Container fluid>
        { renderHTML(this.props.content) }
      </Container>
    )
  }
}

export default ChapterPreview
