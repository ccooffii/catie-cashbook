import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {CategorySection} from "./count/CategorySection";
import {NumberPadSection} from "./count/NumberPad";
import {TagsSection} from "./count/TagListSection";
import {useRecords} from "../hooks/useRecords";

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const defaultFormData = {
    tagIds: [] as number[],
    note: ''as string,
    category:'-' as ('-'|'+'),
    amount: 0 as number,
}
function Count() {
    const [selected,setSelected] = useState(defaultFormData)
    const onChange = (obj:Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    const {addRecord,records} = useRecords()
    const submit = () => {
        if(selected.amount === 0){
            return alert('请输入金额');
        }else if(selected.tagIds.length<=0){
            return alert('请选择一个标签');
        }else {
            addRecord(selected)
            alert('提交成功')
            window.location.reload()
        }
    }
    // console.log(records);
    return (
        <MyLayout>
                <CategorySection
                    value={selected.category}
                    onChange={category => onChange({category})}
                >
                </CategorySection>
            <TagsSection value = {selected.tagIds}
                         onChange={tagIds => onChange({tagIds})}
            >
            </TagsSection>
                <NumberPadSection
                    noteValue = {selected.note}
                    noteValueOnChange={note => onChange({note})}
                      // noteValueOnChange={(note) => setSelected({
                      //     ...selected,
                      //     note : note
                      // })}
                    padValue= {selected.amount}
                    padValueOnChange={amount => onChange({amount})}
                    onOK={submit}
                      // padValueOnChange={(amount) => setSelected({
                      //     ...selected,
                      //     amount: amount
                      // })}
                      // onOK={()=>{}}
                >
                </NumberPadSection>
        </MyLayout>
    );
}
export default Count;