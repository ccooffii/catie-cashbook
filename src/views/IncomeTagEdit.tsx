import {useTags} from "hooks/useTags";
import {Link, useParams} from "react-router-dom";
import React from "react";
import Icon from "../components/Icon";
import {AddButton, DeleteButton, EditWrapper, Params} from "./PayTagEdit";
export const IncomeTagEdit: React.FC = () => {
    const {findTag, updateTag, deleteTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id));
    let tempValue: string;
    if (tag) {
        return (
            <EditWrapper>
                <header>
                    <Link to='/IncomeTagsSettings'><Icon name='return'></Icon></Link>
                    <span>编辑标签 - {tag.name}</span>
                </header>
                <label>
                    <span>修改标签名:</span>
                    <input type="text" placeholder="输入标签名"
                           onChange={(e) => {
                               tempValue = e.target.value
                               // console.log(1)
                           }}
                    />
                </label>
                <div>
                    <AddButton onClick={() => {
                        if (tempValue === tag.name || tempValue == '') {
                            window.alert('请输入新的标签名')
                        } else {
                            window.alert('修改成功')
                            updateTag(tag.id, {name: tempValue, category: '-'})
                        }
                    }}>确定修改</AddButton>
                    <DeleteButton onClick={() => {
                        deleteTag(tag.id)
                        // console.log(1)
                    }}>删除标签</DeleteButton>
                </div>
            </EditWrapper>
        )
    } else {
        return (
            <EditWrapper>
                <header>
                    <Link to='/tagsSettings'><Icon name='return'></Icon></Link>
                    <span>你要找的标签丢了</span>
                </header>
            </EditWrapper>
        )
    }
}