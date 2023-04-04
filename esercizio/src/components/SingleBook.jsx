import { Component, useState } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'

const SingleBook = ({ book }) => {

  const [selected, setSelected] = useState(false)

  return (
    <>
      <Card
        onClick={() => setSelected(!selected)}
        style={{ border: selected ? '3px solid red' : 'none' }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {book.title}
          </Card.Title>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin} />}
    </>
  )
}


export default SingleBook
