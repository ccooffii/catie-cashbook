import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import Icon from "../components/Icon";
const CategorySection = styled.section`
    > ul {
      display: flex;
      flex-direction: row;
      background-color: rgb(254,251,240) ;
      margin-bottom: 5px;
      >li{
        width: 50%;
        text-align: center;
        font: inherit;
        font-size: 24px;
        //padding: 16px 0;
        border: 1px solid black;
        border-radius: 10px;
        &.selected{
          background-color: rgb(246,209,180);
        }
      }
    }
`
const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgb(246,209,105);
  border-top: 2px solid black;
    >.note{
      margin-top: 5px;
      display: flex;
      height: 36px;
      text-align: center;
      flex-direction: row;
      align-items: center;
      padding-right: 5px;
      padding-left: 5px;
      flex-wrap: nowrap;
      >input{
        height: 100%;
        margin-right: 5px;
        margin-left: 5px;
        background: none;
        border:none;
        max-width: 30%;
      }
      .output{
        width: auto;
        line-height: 72px;
      }
    }
  >.pad{
    padding-left: 1%;
    > button{
      background-color: rgb(255,255,255);
      box-shadow: inset 0 -5px 0px rgba(0,0,0,0.25);
      border-radius: 10px;
      border: 2px solid black;
      margin-right: 1%;
      margin-bottom: 1%;
      font-size: 18px;
      float:left;
      width: 24%;
      height: 56px;
      &.OK{
        height: 116px;
        float: right;
      }
      &.dot{
        width: 49%;
      }
    }
  }
`
const TagList = styled.ol`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  //border: 1px solid black;
  width: 370px;
  padding-top: 5px;
  padding-right: 5px;
  padding-left: 5px;
  background-color: rgb(254,251,240); 
  height: 265px;
  >li{
    background-color: rgb(254,251,240);
    border:1px solid black;
    width: 84px;
    height: 84px;
    margin-right: 8px;
    text-align: center;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font: inherit;
    font-size: 14px;
    margin-bottom: 5px;
    &.last{
      width: 84px;
      height: 84px;
          background-color: rgb(254,251,240);
    }
    .icon{
      display: inline-block;
      margin-top: 2px;
      fill:none;
    }
  }
  li:nth-child(4n){
    margin-right: 0px;
  }
`
function Count() {
    return (
        <Layout>
            <TagList>
                <li><Icon name="food" ></Icon>餐饮</li>
                <li><Icon name="rent" ></Icon>房租</li>
                <li><Icon name="clothes" ></Icon>服装</li>
                <li><Icon name="bodybuilding" ></Icon>健身</li>
                <li><Icon name="travel" ></Icon>旅行</li>
                <li><Icon name="makeup" ></Icon>美容</li>
                <li><Icon name="car" ></Icon>汽车</li>
                <li className="last"><Icon name="add"/>添加</li>
            </TagList>
            <CategorySection>
                <ul>
                    <li className = "selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div className="note">
                    备注:
                    <input placeholder="添加备注"/>
                    $:
                    <div className="output">
                        12345678910
                    </div>
                </div>
                <div className="pad">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>DELETE</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>CLEAR</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="OK">OK</button>
                    <button>0</button>
                    <button className="dot">.</button>
                </div>
            </NumberPadSection>
        </Layout>
    );
}
export default Count;