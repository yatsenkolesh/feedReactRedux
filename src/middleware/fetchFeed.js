export function fetchFeed()
{
  return fetch('https://local.graphica.io/en/test/paginate').then(response => response.json())
}