import {useTags} from "hooks/useTags";
import {Link, useParams} from "react-router-dom";
import React from "react";
import Icon from "../components/Icon";
import styled from "styled-components";
type Params = {
    id:any
}
const EditWrapper = styled.div`
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  background-color:rgb(254,251,240) ;
  height: 100vh;
  user-select: text;
  -webkit-user-select: text;
  >header{
    background-color:rgb(246,208,164);
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset -2px -2px 5px rgba(0,0,0,0.25);
    overflow: hidden;
    >a{
      >svg{
        height: 50px;
        width: 50px;
      } 
    }
    >span{
      margin-right: 50vw;
      transform: translateX(50%);
    }
  }
  >label{
    margin-top: 5px;
    display: flex;
    height: 100px;
    text-align: center;
    flex-direction: row;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
    flex-wrap: nowrap;
    ont-size: 20px;
    background-color: rgb(246,208,164);
    border:1.5px solid black;
    margin-right: 50px;
    margin-left: 50px;
    margin-top: 30px;
    border-radius: 10px;
    box-shadow: inset -2px -2px 0px rgba(0,0,0,0.25);
    user-select: text;
    -webkit-user-select: text;
    >input{
      font-size: inherit;
      overflow-x: hidden;
      height: 100%;
      margin-right: 5px;
      margin-left: 5px;
      background: none;
      border:none;
      max-width: 50%;
      user-select: text;
      -webkit-user-select: text;
    }
  }
  >div{
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`
const AddButton = styled.button`
  background-color: rgba(232,130,148,0.7);
  font-size: 18px;
  padding: 8px;
  border-radius: 14px;
  color: white;
  font-weight: bolder;
  text-align: center;
  width: 100px;
  height: 50px;
  font-size: 20px;
  border:none;
  box-shadow: inset -2px -3px 0px rgba(0,0,0,0.25);
`
const DeleteButton = styled.button`
  background-color: rgba(232,50,40,0.7);
  border:none;
  font-size: 18px;
  padding: 8px;
  border-radius: 14px;
  color: white;
  font-weight: bolder;
  width: 100px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  box-shadow: inset -2px -3px 0px rgba(0,0,0,0.25);
`
const TagEdit: React.FC = () => {
    const {findTag,updateTag,deleteTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id));
    let tempValue:string;
    if (tag){
        return(
            <EditWrapper>
                <header>
                    <Link to='/tagsSettings'><Icon name='return'></Icon></Link>
                    <span>编辑标签 - {tag.name}</span>
                </header>
                <label>
                    <span>修改标签名:</span>
                    <input type= "text" placeholder="输入标签名"
                           onChange={(e) => {
                               tempValue = e.target.value
                               // console.log(1)
                           }}
                    />
                </label>
                <div>
                    <AddButton onClick={(e) => {
                        if(tempValue === tag.name || tempValue == ''){
                            window.alert('请输入新的标签名')
                        }else {
                            window.alert('修改成功')
                            updateTag(tag.id,{name:tempValue})
                        }
                    } }>确定修改</AddButton>
                    <DeleteButton onClick={(e) => {
                        deleteTag(tag.id)
                        // console.log(1)
                    }}>删除标签</DeleteButton>
                </div>
            </EditWrapper>
        )
    }else {
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
export {TagEdit};