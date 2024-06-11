import styled from "styled-components"

export const ModalPay = ({ children, state, changeState }) => {
    return (
        <>
            {state &&

                <Container1>
                    <Container2>
                        <Header>
                            <h3>Crear Cuenta</h3>
                        </Header>
                        <CloseButton onClick={()=>changeState(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
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
  width: 300px;
  min-height: 200px;
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


const Boton = styled.button`
  display:block;
  font-size:18px;
  margin: auto;
  text-decoration: none;
  background: goldenrod;
  border: none;
  cursor:pointer;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 15px 5px 15px;
  transition: all .3s;
  margin-bottom: 30px;

  &:hover{
  background: #c5961d;
  box-shadow: 0 3px 5px gray;
  }
`;

