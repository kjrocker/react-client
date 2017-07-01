import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'

class ChapterPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { title, text, number } = this.props.chapter
    return (
      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <h3>{ this.state.title }</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Container text>
              { this.state.chapter.text }
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
export default ChapterPage;
