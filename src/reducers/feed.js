const feed = (state = [], action) => {

  switch (action.type) {
    case 'loadMore':
      return [
        ...state,
        {
          messages: action.data
        }
      ]
    default:
      return state
  }
}

export default feed
