import React from 'react';
import DataTable from 'react-data-table-component';
import { Container } from '@material-ui/core';
 
const data = [{ id: 1, name: 'Handle', year: '1982' }];
const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];

export default class TableNew extends React.Component {
  render(){

  return (
    <Container>
      <h1>Input year:</h1>
      <input type="text" name="year"></input>
      <button type="submit">Filter</button>
      
      <DataTable
        title="Subjects"
        columns={columns}
        data={data}
      />
    </Container>
  );
}
}