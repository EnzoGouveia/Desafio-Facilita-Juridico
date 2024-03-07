import React from 'react';
import styled from 'styled-components';

const ModalDiv = styled.div`
    display: ${p => p.block && p.block};
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height:100%;
    background: rgba(0,0,0,0.6)
`
const ContentDiv = styled.div`
    position: fixed;
    top: 50%;
    left:50%;
    width: 80%;
    height:auto;
    padding: 2rem;
    transform: translate(-50%, -50%);
    background: white;
`
const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: red;
  color: white;
  height: 42px;
`;

const StyledModal = ({ handleClose, show, children }) => {
    return (
        <ModalDiv block={show ? "block" : "none"}>
            <ContentDiv>
                <h2>BEST ROUTE</h2>
                {children}
                <Button
                    onClick={handleClose}
                >
                    CLOSE
                </Button>
            </ContentDiv>
        </ModalDiv>
    )
};

export default StyledModal