const UserAPI = 'https://jsonplaceholder.typicode.com/todos';

/**
 * 取得待辦清單
 */
function get() {
  return fetch(UserAPI)
    .then(response => response.ok ? response.json() : [])
    .catch(err => console.log('錯誤', err));
}

export default { get };