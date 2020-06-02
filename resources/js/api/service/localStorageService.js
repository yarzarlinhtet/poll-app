export const getItem = (name)=>{
    return JSON.parse(localStorage.getItem(name));
}

export const setItem = (name ,data) => {
    localStorage.setItem(name, JSON.stringify(data));
}

export const removeItem = (name) => {
    localStorage.removeItem(name);
}