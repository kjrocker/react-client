import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react'

class ChapterForm extends Component {
  render(){
    const { handleSubmit, createPreview } = this.props
    return (
      <Form onSubmit={handleSubmit(createPreview)}>
        <Form.Field>
          <label htmlFor="chapter[title]">Title</label>
          <Field name="chapter[title]" component="input"/>
        </Form.Field>
        <Form.Field>
          <label htmlFor="chapter[text]">Content</label>
          <Field name="chapter[text]" component="textarea" rows={20}/>
        </Form.Field>
        <Button.Group widths='2'>
          <Button onClick={handleSubmit(createPreview)}>Preview</Button>
          <Button primary type="submit">Submit</Button>
        </Button.Group>
      </Form>
    )
  }
}

const chapterForm = connect(null, null)(ChapterForm)

export default reduxForm({ form: 'chapter' })(chapterForm)
