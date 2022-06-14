import React from 'react'
import Comment from './Comment'

const comments = [
  {
    name: "James Dean",
    comment: "I am a movie star."
  },
  {
    name: "Messi",
    comment: "I am a king of soccer."
  },
  {
    name: "Jay-Z",
    comment: "Hiphop is my life."
  },
]

function CommentList(props) {
  return (
    <div>
      { comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment}/>
        )
      })}

    </div>
  );
}

export default CommentList;