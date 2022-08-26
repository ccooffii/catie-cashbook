import {useEffect, useRef, useState} from "react";
export  type RecordItem = {
    tagIds:number[]
    note:string
    category:('+'|'-')
    amount:number
    createdAt: string
}
type tempRecordItem = {
    tagIds:number[]
    note:string
    category:('+'|'-')
    amount:number
}
export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])
    // const addRecord = (record:RecordItem) => {
    //     setRecords([...records, record])
    // };
    const addRecord = (tempRecord:tempRecordItem) => {
        if(tempRecord.amount <= 0){return}
        if(tempRecord.tagIds.length === 0){
            return;
        }
        const record = {...tempRecord,createdAt:(new Date().toISOString())}
        setRecords([...records,record])
    };
    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
    },[])
    const count = useRef(0);
    useEffect(() => {
        count.current += 1;
    })
    useEffect(()=>{
        if(count.current > 1){
            window.localStorage.setItem('records',JSON.stringify(records))
        }
    })
    const getAmount = (hash:{[k:string]:RecordItem[]}) => {
        const array = Object.entries(hash)
    }
    return{records,addRecord,getAmount}
}