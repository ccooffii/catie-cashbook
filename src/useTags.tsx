import {useEffect, useRef, useState} from "react";
import {createId} from "./lib/createId";
import {useHref} from "react-router-dom";

const useTags =() => {
    const [tags, setTags] = useState<{ id:number;name:string }[]>([]);
    useEffect(()=>{
        let localTags = JSON.parse(window.localStorage.getItem('tags')||'[]')
        if(localTags.length === 0){
            localTags = [
                {id:createId(),name:'餐饮'},
                {id:createId(),name:'房租'},
                {id:createId(),name:'服装'},
                {id:createId(),name:'娱乐'},
                {id:createId(),name:'旅行'},
                {id:createId(),name:'美容'},
                {id:createId(),name:'汽车'},
                {id:createId(),name:'饮品'},
                {id:createId(),name:'宠物'},
                {id:createId(),name:'购物'},
                {id:createId(),name:'度假'},
                {id:createId(),name:'医疗'},
            ]
        }
        setTags(localTags)
    },[])
    const count = useRef(0);
    useEffect(() =>{
        count.current += 1;
        }
    )
    useEffect(()=>{
        if(count.current > 1){
            window.localStorage.setItem('tags',JSON.stringify(tags))
            console.log(1)
            console.log(tags)
        }
    },[tags])
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
    const findTagIndex = (id:number) => {
        let result = -1;
        for(let i=0; i<tags.length;i++) {
            if(tags[i].id === id){
                result = i;
                break;
            }
        }
        return result;
    }
    const updateTag = (id:number,obj:{name:string}) => {
        setTags(tags.map(tag => {
            if(tag.id === id){
                return {id:id,name:obj.name};
            }else {
                return tag;
            }
        }))
        // const index = findTagIndex(id);
        // const tempTags = JSON.parse(JSON.stringify(tags));
        // tempTags.splice(index,1,{id:id,name:obj.name});
        // setTags(tempTags);
    }
    const deleteTag = (id:number) => {
        setTags(tags.filter(tag=>tag.id !== id))
        // const index = findTagIndex(id);
        // const tempTags = JSON.parse(JSON.stringify(tags));
        // tempTags.splice(index,1);
        // setTags(tempTags);
    }
    const addTag = () => {
        const newTagName = window.prompt('新标签名字为')
        if (newTagName !== null && newTagName !== ''){
            setTags([...tags,{id:createId(),name:newTagName}]);
        }
    }
    return{tags,iconMap,setTags,addTag,updateTag,findTag,findTagIndex,deleteTag}
}
export {useTags};