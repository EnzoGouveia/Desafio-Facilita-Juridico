import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import Filter from "./Filter"; // Importando o componente de filtro

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

const Grid = ({ users, setUsers, setOnEdit }) => {
  const [filter, setFilter] = useState({
    name: "",
    email: "",
    phone: "",
    coordinateX: "",
    coordinateY: "",
  });

  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      user.email.toLowerCase().includes(filter.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filter.phone.toLowerCase()) &&
      user.coordinates.x
        .toString()
        .includes(filter.coordinateX.toLowerCase()) &&
      user.coordinates.y
        .toString()
        .includes(filter.coordinateY.toLowerCase())
    );
  });

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Coordinate X</Th>
            <Th>Coordinate Y</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredUsers.map((item, i) => (
            <Tr key={i}>
              <Td width="15%">{item.name}</Td>
              <Td width="30%">{item.email}</Td>
              <Td width="20%">{item.phone}</Td>
              <Td alignCenter width="12%">
                {item.coordinates.x}
              </Td>
              <Td alignCenter width="12%">
                {item.coordinates.y}
              </Td>
              <Td alignCenter width="5%">
                <FaEdit onClick={() => handleEdit(item)} />
              </Td>
              <Td alignCenter width="5%">
                <FaTrash onClick={() => handleDelete(item.id)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Grid;