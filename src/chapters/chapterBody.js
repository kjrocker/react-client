import React from 'react'
import { Container, Header, Dropdown, Grid, Rail } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import renderHTML from 'react-render-html'

import { goToChapter } from './actions'
import ChapterSelect from './chapterDropdown'

const ChapterBody = ({ story, chapter }) => {
  return (
    <Container text>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Header as='h3'>{chapter.title}</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      { renderHTML(chapter.text) }
      <ChapterSelect story={story} chapter={chapter}/>
    </Container>
  )
}

export default ChapterBody;
