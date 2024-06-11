import React from 'react'
import styled from 'styled-components'

export const Modal = ({children, state, changeState}) => {
  return (
    <>
      {state &&
      
      <Container1>
        <Container2>
          <Header>
            <h3>Transferir Dinero</h3>
          </Header>
          <CloseButton onClick={()=> changeState(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </CloseButton>
          {children}
        </Container2>
      </Container1>
      }
    </>
  )
}

const Container1 = styled.div`
  height: 100vh;
  width:100vw;
  position: fixed;
  top: 0;
  left:0;
  background:rgba(9,9,9,.3);

  display:flex;
  align-items:center;
  justify-content: center;
`;

const Container2 = styled.div`
  width: 400px;
  min-height: 300px;
  background: #d8d6d6;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 7px 29px 0px rgba(100,100,111, 0.2);
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e8e8e8;
  cursor:default;

  h3{
    font-weight: 500;
    font-size: 22px;
    text-align:center;
  }
`;

const CloseButton = styled.button`
  position:absolute;
  top: 10px;
  right:10px;

  width: 25px;
  border:none;
  background: none;
  cursor:pointer;
  color: red;
  transition:.3s all;
  border-radius: .3rem;

  &:hover{
    background: pink;
      
  }

  svg{
    height: 100%;
    width:100%;

  }
`;
