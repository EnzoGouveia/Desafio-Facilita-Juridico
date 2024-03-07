import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import StyledModal from "./Modal";
import RouteGrid from "./RouteGrid";
import MapRoutes from "./MapRoutes";

const RouteContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const RouteButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Button = ({ modalOpen, setModalOpen, users }) => {
  const [response, setResponse] = useState();

  const list = {
    users: users
  }
  const handleCreateRoute = async () => {
   const { data } = await axios.post("http://localhost:8800/calculate", list);
   setResponse(data);
  };
  
  return(
  <RouteContainer>
    <RouteButton 
        type="submit" 
        onClick={async () => {
            await handleCreateRoute();
            setModalOpen(!modalOpen);
        }}
        >
        CREATE ROUTE
    </RouteButton>
    <StyledModal
        show={modalOpen}
        handleClose={() => setModalOpen(false)}
        >
        <RouteGrid users={response} />
        <MapRoutes users={response} />
    </StyledModal>
  </RouteContainer>
  )
};

export default Button;