import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { postFormRequest} from '../helpers'

import { requireAuthentication } from '../helpers'
import ChapterPreview from './chapterPreview'
import ChapterForm from './chapterForm'

class ChapterWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = { title: "", preview: "<p></p>" }
  }

  submitPreview = (values) => {
    const request = postFormRequest(values)
    return fetch('/chapter_preview', request)
      .then(r => r.json())
      .then((r) => this.setState({ title: values.chapter.title, preview: r.safe_text }))
  }

  render() {
    const title = this.state.title ? ` - ${this.state.title}` : ''
    return (
      <Grid padded stackable columns={2}>
        <Grid.Column>
          <h2>Chapter Submission</h2>
          <ChapterForm createPreview={this.submitPreview}/>
        </Grid.Column>
        <Grid.Column>
          <h2>Chapter Preview{title}</h2>
          <ChapterPreview content={this.state.preview}/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default requireAuthentication(ChapterWrapper)
