import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import Icon from "../components/Icon";
import dayjs from "dayjs"
import {useDate} from "../hooks/useDate";
const StatisticsLayOut = styled(Layout)`
>header{
  background-color:rgb(246,208,164);
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 20px;
  margin-bottom: 10px;
}
  >ul{
    display: flex;
    flex-direction: column;
    padding-left: 8px;
    padding-right: 8px;
    overflow-y: scroll;
    flex-grow: 1;
    >.date{
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-bottom: 2px;
    }
    >li{
      box-shadow: inset -2px -3px 0px rgba(0,0,0,0.25);
      background-color:rgb(254,251,240) ;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      width: 100%;
      margin-bottom: 4px;
      z-index: 2;
      border: 1px solid black;
      >.name{
        display: flex;
        flex-direction: row;
        margin-right: 30vw;
        align-items: center;
        margin-left: 7px;
        >div{
          display: flex;
          flex-direction: column;
          margin-left: 5px;
          >.note{
            color: #777;
            font-size: 10px;
          }
        }
        >svg{
          height: 30px;
          width: 30px;
          margin-right: 5px;
        }
      }
      >.amount{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 7px;
        >.money{
          font-weight: bold;
          color: #555;
          font-size: 12px;
        }
      }
    }
    
  }
`
function Statistics() {
    const {records} = useRecords()
    const {IconMap,getName} = useTags()
    const {findToday,findMonth,findDay} = useDate()
    const hashDay : {[k:string]:RecordItem[]} = {};
    records.map(record => {
        const key = dayjs(record.createdAt).format('YYYY-MM-DD')
        if(!(key in hashDay)){
            hashDay[key] = []
        }
        hashDay[key].push(record)
    })
    const array = Object.entries(hashDay).sort((a,b)=>{
        if (a[0]===b[0]) return 0
        if(a[0]<b[0]) return 1
        if(a[0]>b[0]) return -1
        return 0
    })
    return (
        <StatisticsLayOut>
            <header>
                收支明细
            </header>
            {array.map(x=> <ul>
                <div className="date">
                    <span>
                        {x[0]}
                    </span>
                    <span>
                        {findToday(x[0])}
                    </span>
                </div>
                {x[1].map(record => {
                    return <li key={record.createdAt}>
                        <div className="name">
                            <Icon name={IconMap[record.tagIds[0]]||'猫猫'}></Icon>
                            <div>
                                <span>{getName(record.tagIds[0])}</span>
                                <span className='note'>{record.note}</span>
                            </div>
                        </div>
                        <div className="amount">
                            <span>{record.category==='-'?'支出':'收入'}</span>
                            <span className="money">￥{record.amount}</span>
                        </div>
                    </li>
                })}

            </ul>)}
        </StatisticsLayOut>
    );
}
export default Statistics;