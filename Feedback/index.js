import {Component} from 'react'
import './index.css'

const Emoji = props => {
  const {id, name, url, emojiClicked} = props
  const emojiClick = () => {
    emojiClicked(id)
  }
  return (
    <li className="emoji-list">
      <img src={url} alt={name} className="emoji-style" onClick={emojiClick} />
      <p className="emoji-name">{name}</p>
    </li>
  )
}

const LoveEmojiCard = props => {
  const {loveEmojiUrl} = props
  return (
    <div className="bg-container">
      <div className="white-card">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thankyou-text">Thank You!</h1>
        <p className="thankyou-below-text">
          We will use your feedback to improve our customer support
          <br /> performance.
        </p>
      </div>
    </div>
  )
}

class Feedback extends Component {
  state = {
    isSubmitted: false,
  }

  onEmojiClicked = () => {
    this.setState({
      isSubmitted: true,
    })
  }

  render() {
    const {isSubmitted} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    console.log(emojis)
    if (isSubmitted === true) {
      return <LoveEmojiCard loveEmojiUrl={loveEmojiUrl} />
    }
    return (
      <div className="bg-container">
        <div className="white-card">
          <h1 className="question">
            How satisfied are you with our <br />
            customer support performance?
          </h1>
          <ul className="emojis-container">
            {emojis.map(each => (
              <Emoji
                key={each.id}
                id={each.id}
                url={each.imageUrl}
                name={each.name}
                emojiClicked={this.onEmojiClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Feedback
