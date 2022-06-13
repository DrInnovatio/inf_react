import React from 'react'
import Comment from './Comment'

function CommentList(props) {
  return (
    <div>
      <Comment name={ "Habok Park" } comment={ "I am getting better!!" } />
      <Comment name={ "James Kam" } comment={ "React is fun." } />
      
    </div>
  );
}

export default CommentList;