import React from 'react'
import { Segment, Header, Loader } from 'semantic-ui-react'

const StoryBox = ({ story }) => {
  return (
    <Segment padded>
      <Header as='h2'>
        {story.title}
        <Header.Subheader>By: {story.author}</Header.Subheader>
      </Header>
      <p>{story.summary}</p>
    </Segment>
  )
}

export default StoryBox;
