import React from 'react'
import PropTypes from 'prop-types'
import FeedItem from './FeedItem'

const Feed = ({ feed }) => {

  if(!feed.length) {
    return (<div></div>)
  }

  let rows = []

  for (let i in feed) {
   rows.push((<span>
    {
      feed[i].messages.map(feed =>
      <FeedItem
        {...feed}
      />
    )
    }
      </span>
    ))
  }

  return (<span>{rows}</span>)
}

export default Feed
