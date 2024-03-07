import styled from "styled-components";

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

const RouteGrid = ({ users }) => {
    if (!Array.isArray(users) || users.length === 0) {
        return
    }

return (
    <Table>
      <Thead>
        <Tr>
            <Th>N°</Th>   
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Coordinate X</Th>
            <Th>Coordinate Y</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td>{i+1}º</Td>
            <Td width="15%">{item.name}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="20%">
              {item.phone}
            </Td>
            <Td alignCenter width="12%">
              {item.coordinates.x}
            </Td>
            <Td alignCenter width="12%">
              {item.coordinates.y}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default RouteGrid;