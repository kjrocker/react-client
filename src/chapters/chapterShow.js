import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'
import renderHTML from 'react-render-html'

import { getStoryWithChapters } from './actions'

const CompleteChapter = ({ chapter }) => {
  return (
    <Grid container>
      <Grid.Row>
        <Grid.Column>
          <h3>{ chapter.attributes.title || 'Test' }</h3>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Container text>
            { renderHTML(chapter.attributes.text) }
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

class ChapterPage extends Component {
  componentWillMount() {
    this.props.actions.getStoryWithChapters(this.props.params.id)
  }

  render() {
    if (this.props.chapter) {
      return <CompleteChapter chapter={this.props.chapter}/>
    } else {
      return <Container text/>
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getStoryWithChapters }, dispatch)
});

const mapStateToProps = (state) => {
  return {
    chapter: state.api.chapters["3"]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterPage);
