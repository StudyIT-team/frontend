import React from 'react';
import DataTable from 'react-data-table-component';
import { Container, Button } from '@material-ui/core';
import { IconButton } from 'material-ui';

const data = [{ id: 1, name: 'Crypto', year: '2019', semester:'1'},
            { id: 2, name: 'VR', year: '2019', semester:'1' },
            { id: 3, name: 'PPD', year: '2019', semester:'1' },
            { id: 4, name: 'LFTC', year: '2019', semester:'1' },
            { id: 5, name: 'Mobile', year: '2019', semester:'1' }];

var searchString = '';
var searchString1 = '';

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
  {
    name: 'Semester',
    selector: 'semester',
    sortable: true,
  },
];

export default class TableNew extends React.Component {
  handleChange(e) {
    searchString = e.target.value;
  };

  handleChange1(e) {
    searchString1 = e.target.value;
  };

  activeClick(){
    if(searchString.length > 0){
      if (searchString1.length > 0){
        data = data.filter(l => {
          return l.year.toLowerCase().match( searchString ) && 
                 l.semester.toLocaleLowerCase().match( searchString1 );
      });
      }
    }
  }

  render(){

    searchString = searchString.trim().toLowerCase();
    searchString1 = searchString1.trim().toLowerCase();


    if(searchString.length > 0){
      if (searchString1.length > 0){
        data = data.filter(l => {
          return l.year.toLowerCase().match( searchString );
      });
      }
    }

  return (
    <Container style={{width:"30vw"}}>
      <p>Input year:</p>
      <input type="text" name={searchString} style={{width:"5vw"}} onChange={this.handleChange} placeholder="Type here"></input>
      <p>Input semester:</p>
      <input type="text" name={searchString1} style={{width:"5vw"}} onChange={this.handleChange1} placeholder="Type here"></input>
      <Button type="submit" onClick={this.activeClick()}>Filter</Button>
      
      <DataTable
        title="Subjects"
        columns={columns}
        data={data}
      />
    </Container>
  );
}
}