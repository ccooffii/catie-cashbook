import {useState} from "react";

const defaultTags = [
    {id:1,name:'餐饮'},
    {id:2,name:'房租'},
    {id:3,name:'服装'},
    {id:4,name:'娱乐'},
    {id:5,name:'旅行'},
    {id:6,name:'美容'},
    {id:7,name:'汽车'},
    {id:8,name:'饮品'},
    {id:9,name:'宠物'},
    {id:10,name:'购物'},
    {id:11,name:'度假'},
    {id:12,name:'医疗'},
]

const useTags =() => {
    const [tags, setTags] = useState<{ id:number;name:string }[]>(defaultTags);
    const iconMap:{[k:string]:string} ={
        1:'餐饮',
        2:'房租',
        3:'服装',
        4:'娱乐',
        5:'旅行',
        6:'美容',
        7:'汽车',
        8:'饮品',
        9:'宠物',
        10:'购物',
        11:'度假',
        12:'医疗'};
    const findTag = (id:number) => tags.filter(tag => tag.id === id)[0];
    return{tags,setTags,iconMap,findTag}
}
export {useTags};