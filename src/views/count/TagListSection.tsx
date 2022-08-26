import styled from "styled-components";
import React, {useState} from "react";
import Icon from "../../components/Icon";
import {Link} from "react-router-dom";
import {useTags} from "../../hooks/useTags";
interface TagProps {
    children?:React.ReactNode | React.ReactNode[];
    value:number[];
    onChange: (selected:number[]) => void;
}
const TagListSection = styled.ol`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  //border: 1px solid black;
  width: 370px;
  padding : 20px;
  flex-grow: 1;
  background-color: rgb(254,251,240);
  align-content:flex-start;
  >div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: -20px;
  >a{
    background-color: rgb(246,208,160);
    width: 50px;
    height: 50px;
    margin-right: 20px;
    margin-bottom: 20px;
    text-align: center;
    border: 2px solid black;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font: inherit;
    font-size: 12px;
    font-weight: bolder;
  }
  >li {
    background-color: rgb(246, 208, 160);
    width: 50px;
    height: 50px;
    margin-right: 20px;
    margin-bottom: 20px;
    text-align: center;
    border: 2px solid black;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font: inherit;
    font-size: 12px;
    font-weight: bolder;

    &.selected {
      border: 3px solid rgb(246, 100, 100);
      background-color: rgb(246, 209, 181);
    }

    .icon {
      display: inline-block;
      margin-top: 2px;
      fill: none;
    }
  }
  }
  //li:nth-child(5n){
  //  margin-right: 0px;
  //}

  @media(min-width: 600px){
    width: 500px;
    li:nth-child(5n){
    }
  }
`
const TagsSection: React.FC<TagProps> = (props) => {
    // const [tags, setTags] = useState<string[]>(['餐饮','房租','服装','娱乐','旅行','美容','汽车','饮品','宠物','购物','度假','医疗']);
    // //const iconMap =['餐饮','房租','服装','娱乐','旅行','美容','汽车','饮品','宠物','购物','度假'];
    // const iconMap:{[k:string]:string} ={'餐饮':'餐饮','房租':'房租','服装':'服装','娱乐':'娱乐','旅行':'旅行','美容':'美容','汽车':'汽车','饮品':'饮品','宠物':'宠物','购物':'购物','度假':'度假','医疗':'医疗'};
    // const [selectedTagIds,setSelectedTags] = useState<string[]>([]);
    const selectedTagIds = props.value;
    // const onAddTag = () =>{
    //     const newTagName = window.prompt('你要新增加的标签名称为')
    //     console.log(newTagName);
    //     if (newTagName !== null){
    //         setTags([...tags,newTagName]);
    //         console.log(setTags)
    //     }
    // };
    const onToggleTag = (tagId:number) => {
        // console.log(typeof setSelectedTags)
        const index = selectedTagIds.indexOf(tagId)
        if (index >= 0){
            props.onChange(selectedTagIds.filter(t => t !== tagId));
        }else {
            props.onChange([tagId])
        }
    }
    const {tags,iconMap} = useTags();
    return(
        <TagListSection>
            <div>
            {tags.map(tag=>
                <li key={tag.id} onClick={() => {onToggleTag(tag.id)}} className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected': ''}>
                    <Icon name={iconMap[tag.id]||'猫猫'}/>
                    {tag.name}
                </li>
            )}
            <Link to='/tagsSettings'>
                <Icon name="设置"/>设置
            </Link>
            </div>
        </TagListSection>
    );
}

export {TagsSection};