import styled from "styled-components";
import React, {useState} from "react";
interface categoryProps {
    children?:React.ReactNode;
    value:('-'|'+');
    onChange:(c:('-'|'+'))=>void;
}
const Category = styled.section`
    > ul {
      display: flex;
      flex-direction: row;
      background-color: rgb(254,251,240) ;
      margin-bottom: 5px;
      margin-top: 20px;
      height: 50px;
      flex-wrap: nowrap;
      >li{
        width: 20vw;
        text-align: center;
        font: inherit;
        font-size: 24px;
        padding: 10px 0;
        border: 2px solid black;
        border-radius: 10px;
        margin-right: 20px;
        margin-left: 20px ;
        background-color: rgb(246,208,110);
        box-shadow: inset -2px -2px 5px rgba(0,0,0,0.25);
        &.selected{
          border: 3px solid rgb(246,100,100);
          background-color: rgb(246,209,181);
          box-shadow: inset -2px -2px 2px rgba(0,0,0,0.25);
        }
      }
    }
`

const CategorySection:React.FC<categoryProps> = (props) =>{
    // const [category, setCategory] = useState('-');
    const category = props.value;
    const [categoryList] = useState<('-'|'+')[]>(['-','+'])
    const categoryMap = {'-':'支出','+':'收入'}
    return (
        <Category>
            <ul>
                {categoryList.map(c =>
                        <li key={c}
                            className={category === c ? 'selected':''}
                            onClick={() => {props.onChange(c)}}
                        >{categoryMap[c]}
                        </li>
                )}
            </ul>
        </Category>
    );
}
export {CategorySection};