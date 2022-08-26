import react from 'react';
let id:number = parseInt(window.localStorage.getItem('idMAX') || '0');
const createId = () => {
    id += 1;
    window.localStorage.setItem('idMAX',id.toString())

    return id;
}
export {createId};