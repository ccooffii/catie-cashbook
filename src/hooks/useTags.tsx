import {useEffect, useRef, useState} from "react";
import {createId} from "../lib/createId";
const useTags =() => {
    const [Tags, setTags] = useState<{ id:number;name:string;category:('+'|'-')}[]>([]);
        useEffect(()=>{
            let localTags = JSON.parse(window.localStorage.getItem('tags')||'[]')
            if(localTags.length === 0){
                localTags = [
                    {id:createId(),name:'餐饮',category:'-'},
                    {id:createId(),name:'房租',category:'-'},
                    {id:createId(),name:'服装',category:'-'},
                    {id:createId(),name:'娱乐',category:'-'},
                    {id:createId(),name:'旅行',category:'-'},
                    {id:createId(),name:'美容',category:'-'},
                    {id:createId(),name:'汽车',category:'-'},
                    {id:createId(),name:'饮品',category:'-'},
                    {id:createId(),name:'宠物',category:'-'},
                    {id:createId(),name:'购物',category:'-'},
                    {id:createId(),name:'度假',category:'-'},
                    {id:createId(),name:'医疗',category:'-'},
                    {id:createId(),name:'工资',category:'+'},
                    {id:createId(),name:'奖金',category:'+'},
                    {id:createId(),name:'兼职',category:'+'},
                    {id:createId(),name:'投资',category:'+'},
                    {id:createId(),name:'转账',category:'+'},
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
            window.localStorage.setItem('tags',JSON.stringify(Tags))
        }
    },[Tags])
    const IconMap:{[k:string]:string} ={
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
        12:'医疗',
        13:'薪水',
        14:'奖金',
        15:'兼职',
        16:'投资',
        17:'收款',};
    const findTag = (id:number) => Tags.filter(tag => tag.id === id)[0];
    const findTagIndex = (id:number) => {
        let result = -1;
        for(let i=0; i<Tags.length; i++) {
            if(Tags[i].id === id){
                result = i;
                break;
            }
        }
        return result;
    }

    const updateTag = (id:number,obj:{name:string;category:('+'|'-')}) => {
        setTags(Tags.map(tag => {
            if(tag.id === id){
                return {id:id,name:obj.name,category:obj.category};
            }else {
                return tag;
            }
        }))
    }
    const deleteTag = (id:number) => {
        setTags(Tags.filter(tag=>tag.id !== id))
    }
    const addPayTag = () => {
        const newTagName = window.prompt('新标签名字为')
        if (newTagName !== null && newTagName !== ''){
            setTags([...Tags,{id:createId(),name:newTagName,category:'-'}]);
        }
    }
    const addIncomeTag = () => {
        const newTagName = window.prompt('新标签名字为')
        if (newTagName !== null && newTagName !== ''){
            setTags([...Tags,{id:createId(),name:newTagName,category:'+'}]);
        }
    }
    const getName = (id:number) => {
        const tag = Tags.filter(tag=>tag.id===id)[0]
        if(tag){
            return tag.name
        }else {
            return ''
        }
    }
    return{tags: Tags,IconMap,getName,setTags,addPayTag,addIncomeTag,updateTag,findTag,findTagIndex,deleteTag}
}
export {useTags};