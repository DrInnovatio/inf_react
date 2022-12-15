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
<<<<<<< HEAD
      { comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment}/>
        )
      })}

=======
      <Comment name={ "Habok Park" } comment={ "I am getting better!!" } />
      <Comment name={ "James Kam" } comment={ "React is fun." } />
      
>>>>>>> 83596d794be23545da2a96d2ce99a7fe6695a56e
    </div>
  );
}

export default CommentList;