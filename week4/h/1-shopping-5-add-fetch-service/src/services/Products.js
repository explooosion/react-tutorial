const API = 'https://jsonplaceholder.typicode.com/users';

function get() {
    return fetch(API).then(res => res.json());
}

export default { get };