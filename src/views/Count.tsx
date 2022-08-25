import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {CategorySection} from "./count/CategorySection";
import {NumberPadSection} from "./count/NumberPad";
import {TagsSection} from "./count/TagListSection";

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
    align-items: center;
`
function Count() {
    const [selected,setSelected] = useState({
        tagIds: [] as number[],
        note: '',
        category:'-' as ('-'|'+'),
        amount: 0,

    })
    const onChange = (obj:Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
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