import React from "react";
import styled from "styled-components";

const FilterContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const FilterInputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterInput = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const FilterTitle = styled.h2`
  margin-bottom: 10px;
`;

const FilterLabel = styled.label``;

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FilterContainer onSubmit={handleSubmit}>
    <FilterTitle>FILTER</FilterTitle>
      <FilterInputArea>
        <FilterLabel>Name</FilterLabel>
        <FilterInput
          type="text"
          name="name"
          value={filter.name}
          onChange={handleFilterChange}
        />
      </FilterInputArea>
      <FilterInputArea>
        <FilterLabel>Email</FilterLabel>
        <FilterInput
          type="text"
          name="email"
          value={filter.email}
          onChange={handleFilterChange}
        />
      </FilterInputArea>
      <FilterInputArea>
        <FilterLabel>Phone</FilterLabel>
        <FilterInput
          type="text"
          name="phone"
          value={filter.phone}
          onChange={handleFilterChange}
        />
      </FilterInputArea>
      <FilterInputArea>
        <FilterLabel>Coordinate X</FilterLabel>
        <FilterInput
          type="text"
          name="coordinateX"
          value={filter.coordinateX}
          onChange={handleFilterChange}
        />
      </FilterInputArea>
      <FilterInputArea>
        <FilterLabel>Coordinate Y</FilterLabel>
        <FilterInput
          type="text"
          name="coordinateY"
          value={filter.coordinateY}
          onChange={handleFilterChange}
        />
      </FilterInputArea>
    </FilterContainer>
  );
};

export default Filter;