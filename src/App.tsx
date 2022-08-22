import React from 'react';
import 'index.scss';
import {HashRouter, Routes, Route, Link} from "react-router-dom";
import  styled from 'styled-components'
const Wrapper = styled.div`
  border: 1px solid grey;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media(min-width: 600px){
    height: 667px;
    width: 375px;
  }
`
const Navi = styled.div`
  border: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  >a {
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid green;
  }
`
const Main = styled.div`
  border: 1px solid red;
  flex-grow: 1;
  overflow: auto;
`
export default function App() {
    return (
    <HashRouter>
        <Wrapper>
            <Main>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="home" element={<Home />}/>
                    <Route path="labels" element={<Labels />}/>
                    <Route path="count" element={<Count />}/>
                    <Route path="statistics" element={<Statistics />}/>
                    <Route path="*" element={<NoMatch />}/>
            </Routes>
            </Main>
            <Navi>
                <Link to="/Labels">标签</Link>
                <Link to="/Count">记账</Link>
                <Link to="/Statistics">统计</Link>
                <Link to="/Home">主页</Link>
            </Navi>
        </Wrapper>
    </HashRouter>
    );
};
function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}
function Labels() {
    return (
        <div>
            <h1>Labels</h1>
        </div>
    );
}
function Count() {
    return (
        <div>
            <h1>Count</h1>
        </div>
    );
}
function Statistics() {
    return (
        <div>
            <h1>Statistics</h1>
        </div>
    );
}
function NoMatch() {
    return (
        <span>NOT FOUND 404</span>
    )
}