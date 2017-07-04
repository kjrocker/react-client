import React, { Component } from 'react'
import build from 'redux-object'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import { getStories } from './actions'
import StoryBox from './storyBox'

class StoryList extends Component {
  componentWillMount() {
    this.props.actions.getStories()
  }

  render() {
    if (this.props.stories) {
      const segments = this.props.stories.map(s => <StoryBox story={s}/>)
      return (
        <Container>
          { segments }
        </Container>
      )
    } else {
      <Container></Container>
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stories: build(state.api, 'stories', null)
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getStories }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryList);
