import React from "react";
import {Link} from "react-router-dom";
import Icon from "../components/Icon";
import {useTags} from "../hooks/useTags";
import {AddTagBar, Container, TagsBar, TagsList} from "./PayTagsSettings";
export function IncomeTagsSettings(){
    const {tags,IconMap,addIncomeTag} = useTags();
    return(
        <Container>
            <TagsBar>
                <Link to='/count'>
                    <Icon name='return'/>
                </Link>
                <span>标签列表</span>
            </TagsBar>
            <TagsList>
                {tags.map(tag=>
                    <li key={tag.id} className={tag.category==='+'?'':'hide'}>
                        <Link to={'/IncomeTagsSettings/'+tag.id}>
                            <Icon name={IconMap[tag.id]||'猫猫'}/>
                            <span>{tag.name}{' '+'>'}</span>
                        </Link>
                    </li>
                )}
            </TagsList>
            <AddTagBar onClick={addIncomeTag}>新增标签</AddTagBar>
        </Container>
    )
}