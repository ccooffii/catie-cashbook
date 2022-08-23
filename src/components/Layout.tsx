import React from "react";
import Navi from "./Navi";
import styled from "styled-components";

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
const Main = styled.div`
  border: 1px solid red;
  flex-grow: 1;
  overflow: auto;
`

const Layout = (props : any) => {
    return (
    <div>
        <Wrapper>
                <Main>
                    {props.children}
                </Main>
            <Navi />
        </Wrapper>
    </div>
    )
}

export  default Layout;