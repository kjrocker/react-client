import React from 'react'
import { Dropdown, Button, Container } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { goToChapter } from './actions'

class ChapterSelect extends React.Component {
  makeDropdown = (arr) => {
    return arr.map(c => ({ key: c.id, value: c.number, text: c.title}))
  }

  chapterShortcut = (num) => {
    this.props.actions.goToChapter(this.props.story.id, num)
  }

  handleChange = (e, data) => {
    this.chapterShortcut(data.value)
  }

  nextChapterIndex = () => {
    const chapterNumbers = this.props.story.chapterNumbers
    const currentChapterIndex = chapterNumbers.indexOf(this.props.chapter.number)
    return currentChapterIndex >= chapterNumbers.length - 1 ? currentChapterIndex : currentChapterIndex + 1
  }

  prevChapterIndex = () => {
    const chapterNumbers = this.props.story.chapterNumbers
    const currentChapterIndex = chapterNumbers.indexOf(this.props.chapter.number)
    return currentChapterIndex == 0 ? currentChapterIndex : currentChapterIndex - 1
  }

  handleButtonClick = (num) => {
    return () => this.chapterShortcut(this.props.story.chapterNumbers[num])
  }

  render() {
    const chapterDropdown = this.makeDropdown(this.props.story.chapters)
    const { chapterNumbers } = this.props.story
    return (
      <Container textAlign="center">
        <Button.Group>
          <Button onClick={this.handleButtonClick(0)} icon='fast backward'/>
          <Button onClick={this.handleButtonClick(this.prevChapterIndex())} icon='step backward'/>
        </Button.Group>
        <Dropdown className='right'
          selection
          value={this.props.chapter.number}
          options={chapterDropdown}
          onChange={this.handleChange}
        />
        <Button.Group>
          <Button onClick={this.handleButtonClick(this.nextChapterIndex())} icon='step forward'/>
          <Button onClick={this.handleButtonClick(chapterNumbers.length - 1)} icon='fast forward'/>
        </Button.Group>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ goToChapter }, dispatch)
})

export default connect(null, mapDispatchToProps)(ChapterSelect);
