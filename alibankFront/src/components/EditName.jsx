import styled from "styled-components"

export const EditName = ({ children, state, changeState }) => {
    return (
        <>
            {state &&
                <ContainerE>
                    <ContainerE2>
                        <HeaderE>
                            <h3>Editar Nombre</h3>
                        </HeaderE>
                        <CloseBottonE onClick={() => changeState(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </CloseBottonE>
                        {children}
                    </ContainerE2>
                </ContainerE>

            }
        </>
    )
};


const ContainerE = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(9,9,9,.3);

    display:flex;
    align-items:center;
    justify-content:center;
`;

const ContainerE2 = styled.div`
    width: 400px;
    min-height:250px;
    background: whitesmoke;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 7px 29px 0px rgba(100,100,111, 0.2);
    padding: 20px;
`;

const HeaderE = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid black:;

    h3{
        font-weight: 500;
        font-size: 22px;
        text-align: center;
    }
`;

const CloseBottonE = styled.button`
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

}`;