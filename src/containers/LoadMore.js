import React from 'react'
import { connect } from 'react-redux'
import { loadMore } from '../actions'
import { fetchFeed } from '../middleware/fetchFeed'

let LoadMore = ({ dispatch }) => {
  let input

  fetchFeed().then(feed => dispatch(loadMore(feed)))

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
       fetchFeed().then(feed => dispatch(loadMore(feed)))
      }}>
        <button type="submit">
          Load more
        </button>
      </form>
    </div>
  )
}
LoadMore = connect()(LoadMore)

export default LoadMore
