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
          <Field name="chapter[text]" component="textarea" rows={5}/>
        </Form.Field>
        <Button primary type="submit">Preview</Button>
      </Form>
    )
  }
}

const chapterForm = connect(null, null)(ChapterForm)

export default reduxForm({ form: 'chapter' })(chapterForm)
