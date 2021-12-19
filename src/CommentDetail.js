import faker from 'faker'

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()}></img>
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">
            Dec 25<sup>th</sup>
          </span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  )
}

export default CommentDetail
