import React from 'react';
import Book from './Book';

function Library(props) {
  return (
    <div>
      <Book name="Grit" numOfPages={329}/>
      <Book name="For whom the bell told" numOfPages={675}/>
      <Book name="Harry Potter" numOfPages={433}/>
    </div>
  )
}
  
export default Library;