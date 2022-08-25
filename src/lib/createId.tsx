import react from 'react';
let id:number = 12;
const createId = () => {
    id += 1;
    return id;
}
export {createId};