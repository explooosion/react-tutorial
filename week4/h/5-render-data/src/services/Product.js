const API = '/api/drinks.json';
// http://localhost:3000/api/drinks.json

/**
 * 取得資料
 */
function get() {
    return fetch(API).then(r => r.json());
}

export default {
    get,
}