// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isSubmitted: false,
  }

  onSubmit = () => {
    this.setState({
      isSubmitted: true,
    })
  }

  render() {
    const {isSubmitted} = this.state
    const {resources} = this.props
    const emoji = resources[0]
    const loveEmojiUrl = resources[1]
    let feedBack
    if (isSubmitted === false) {
      feedBack = (
        <div className="feedback-card">
          <p className="input-question">
            How Satisfied are you with our customer support performance?
          </p>
          <ul className="emoji-list">
            <li className="each-list">
              <img
                src={emoji[0].imageUrl}
                alt="name"
                className="emoji-image"
                onClick={this.onSubmit}
              />
              <p className="emoji-name">{emoji[0].name}</p>
            </li>
            <li className="each-list">
              <img
                src={emoji[1].imageUrl}
                alt="name"
                className="emoji-image"
                onClick={this.onSubmit}
              />
              <p className="emoji-name">{emoji[1].name}</p>
            </li>
            <li className="each-list">
              <img
                src={emoji[2].imageUrl}
                alt="name"
                className="emoji-image"
                onClick={this.onSubmit}
              />
              <p className="emoji-name">{emoji[2].name}</p>
            </li>
          </ul>
        </div>
      )
    } else {
      feedBack = (
        <div className="feedback-card">
          <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
          <p className="thanks-para">Thank You!</p>
          <p className="para">
            We will use this feedback to improve our customer support
            performance.
          </p>
        </div>
      )
    }

    return <div className="bg-container">{feedBack}</div>
  }
}
export default Feedback
