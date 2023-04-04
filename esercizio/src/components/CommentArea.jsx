import { Component, useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = ({ asin }) => {

  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const prendiCommenti = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
        asin,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJjMWMyNDBlNzg3MDAwMTRkODkyZGYiLCJpYXQiOjE2ODA2MTIzODgsImV4cCI6MTY4MTgyMTk4OH0.tVJ0geCglrLaLdCqe8xRRqnX3qAvwUldJ2bCDig07Ho',
          },
        }
      )
      console.log(response)
      if (response.ok) {
        let comments = await response.json()
        setComments(comments)
        setIsLoading(false)
        setIsError(false)
      } else {
        console.log('error')
        setIsLoading(false)
        setIsError(true)
      }
    } catch (error) {
      console.log('error')
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {
    prendiCommenti()
  }, [])

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}


export default CommentArea
