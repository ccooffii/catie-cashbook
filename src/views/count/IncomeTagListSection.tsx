
import React from "react";
import Icon from "../../components/Icon";
import {Link} from "react-router-dom";
import classnames from 'classnames';
import {TagListSection} from "./PayTagListSection";
import {useTags} from "../../hooks/useTags";

interface IncomeTagProps {
    children?:React.ReactNode | React.ReactNode[];
    value:number[];
    onChange: (selected:number[]) => void;
}
const IncomeTagListSection: React.FC<IncomeTagProps> = (props:IncomeTagProps) => {
    const selectedTagIds = props.value;
    const onToggleTag = (tagId:number) => {
        // console.log(typeof setSelectedTags)
        const index = selectedTagIds.indexOf(tagId)
        if (index >= 0){
            props.onChange(selectedTagIds.filter(t => t !== tagId));
        }else {
            props.onChange([tagId])
        }
    }
    const {tags,IconMap} = useTags();
    return(
        <TagListSection>
            <div>
                {tags.map(tag=>
                    <li key={tag.id} onClick={() => {onToggleTag(tag.id)}}
                        className={classnames(tag.category==='+'?'':'hidden',selectedTagIds.indexOf(tag.id) >= 0 ? 'selected': '')}
                    >
                        <Icon name={IconMap[tag.id]||'猫猫'}/>
                        {tag.name}
                    </li>
                )}
                <Link to='/IncomeTagsSettings'>
                    <Icon name="设置"/>设置
                </Link>
            </div>
        </TagListSection>
    );
}
export {IncomeTagListSection};
