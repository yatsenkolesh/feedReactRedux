export const loadMore = (data) => {
  return {
  'type' : 'loadMore',
  'data' : data
}}

export const toggleMore = (id) => ({
  type: 'TOGGLE_MORE',
  id
})
