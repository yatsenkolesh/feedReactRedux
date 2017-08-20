import React from 'react'
import PropTypes from 'prop-types'

const FeedItem = ({text }) => {
  return (<li>
    {text}
  </li>)
}

FeedItem.propTypes = {
  text: PropTypes.string.isRequired
}

export default FeedItem
