const UserAPI = 'https://jsonplaceholder.typicode.com/users';

/**
 * 取得使用者
 */
function get() {
  return fetch(UserAPI)
    .then(response => response.ok ? response.json() : [])
    .catch(err => console.log('錯誤', err));
}

export default { get };