import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import build from 'redux-object'
import { Segment, Divider, Container } from 'semantic-ui-react'

import { getStoryWithChapters } from './actions'
import StoryBox from './storyBox'
import ChapterBody from './chapterBody'

class StoryPage extends Component {
  componentWillMount() {
    this.props.actions.getStoryWithChapters(this.props.storyId)
  }

  render() {
    const { story, chapterNumber } = this.props
    if (story) {
      return (
        <Container>
          <StoryBox story={story}/>
          <Divider/>
          <ChapterBody story={story} chapter={story.chapters.find(c => c.number == chapterNumber)}/>
        </Container>
      )
    } else {
      return (
        <Container>
          <Segment loading></Segment>
          <Divider/>
          <Container text></Container>
        </Container>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    storyId: ownProps.params.id,
    chapterNumber: ownProps.params.number || 1,
    story: build(state.api, 'stories', ownProps.params.id)
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getStoryWithChapters }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryPage);
