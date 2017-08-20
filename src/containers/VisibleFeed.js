import { connect } from 'react-redux'
import { toggleMore } from '../actions'
import Feed from '../components/Feed'

const getVisibleFeed = (feed, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return feed
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  feed: getVisibleFeed(state.feed, state.visibilityFilter)
})

const VisibleFeed = connect(
  mapStateToProps,
)(Feed)

export default VisibleFeed