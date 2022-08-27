import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {CategorySection} from "./count/CategorySection";
import {NumberPadSection} from "./count/NumberPad";
import {PayTagsSection} from "./count/PayTagListSection";
import {useRecords} from "../hooks/useRecords";
import {IncomeTagListSection} from "./count/IncomeTagListSection";

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
    align-items: center;
    &.category{
      display: none;
    }
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
    const {addRecord} = useRecords()
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
    if(selected.category==='-'){
        return (
            <MyLayout>
                <CategorySection
                    value={selected.category}
                    onChange={category => onChange({category})}
                >
                </CategorySection>
                <PayTagsSection
                    value={selected.tagIds}
                    onChange={tagIds => onChange({tagIds})}
                >
                </PayTagsSection>
                <NumberPadSection
                    noteValue = {selected.note}
                    noteValueOnChange={note => onChange({note})}
                    padValue= {selected.amount}
                    padValueOnChange={amount => onChange({amount})}
                    onOK={submit}
                >
                </NumberPadSection>
            </MyLayout>
        )
    }else {
        return(
            <MyLayout>
                <CategorySection
                    value={selected.category}
                    onChange={category => onChange({category})}
                >
                </CategorySection>
                <IncomeTagListSection
                    value={selected.tagIds}
                    onChange={tagIds => onChange({tagIds})}>
                </IncomeTagListSection>
                <NumberPadSection
                    noteValue = {selected.note}
                    noteValueOnChange={note => onChange({note})}
                    padValue= {selected.amount}
                    padValueOnChange={amount => onChange({amount})}
                    onOK={submit}
                >
                </NumberPadSection>
            </MyLayout>
            )
    }
}
export default Count;