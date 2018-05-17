const setItem = (key, data) => {
    if (!data || !key) return;
    sessionStorage.setItem(key, JSON.stringify(data));
}

const getItem = (key) => {
    if (!key) return;
    let data = sessionStorage.getItem(key);
    if (!data) return;
    return JSON.parse(data);
}

const removeItem = (key) => {
    if (!key) return;
    sessionStorage.removeItem(key);
}

// 用户信息 key：USER
const USER = 'USER';
export const user = {
    set: (data) => { setItem(USER, data) },
    get: () => { return getItem(USER) }
};