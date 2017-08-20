import { combineReducers } from 'redux'
import feed from './feed'
import visibilityFilter from './visibilityFilter'

const feedApp = combineReducers({
  feed,
  visibilityFilter
})

export default feedApp
