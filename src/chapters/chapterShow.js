import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'

class ChapterPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Story Title',
      summary: 'Witty Summary',
      chapterCount: 1,
      chapter: {
        number: 1,
        title: 'Chapter 1',
        text: 'Lorem ipsum!'
      }
    }
  }
  render() {
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
