import React from 'react'

function Book(props) {
  return (
    <div>
      <h1>{ `The title of this book is ${props.name}.`}</h1>
      <h2>{ `The total number of pages is ${props.numOfPages}.`}</h2>
    </div>
  )
}

export default Book; 