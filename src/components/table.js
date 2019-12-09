import React from 'react';
import DataTable from 'react-data-table-component';
import { Container, Button } from '@material-ui/core';
import { IconButton } from 'material-ui';

const data = [{ id: 1, name: 'Crypto', year: '2019', semester:'1'},
            { id: 2, name: 'VR', year: '2019', semester:'1' },
            { id: 3, name: 'PPD', year: '2019', semester:'1' },
            { id: 4, name: 'LFTC', year: '2019', semester:'1' },
            { id: 5, name: 'Mobile', year: '2019', semester:'1' }];

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
  constructor(props) {
    super(props);
    this.state = {
      tablelist: [{}],
      searchString:'',
      searchString1:''
  }};

  handleChange=(e) => {
    this.state.searchString = e.target.value;
  };

  handleChange1=(e) => {
    this.state.searchString1 = e.target.value;
  };

  activeClick=() =>{
    const data1 = [{}];
    console.log("this is"+ data1);
    if(this.state.searchString.length > 0 && this.state.searchString1.length > 0){
      for (var i = 0;i < data.length;i++){
        if (data[i].semester == this.state.searchString1 && data[i].year == this.state.searchString){
          data1.push(data[i]);
        }
      }
      }
      console.log(data1);
      this.setState((state) => ({ tablelist: [...data1] }));
  }

  render(){

  return (
    <Container style={{width:"30vw"}}>
      <p>Input year:</p>
      <input type="text" name='year' style={{width:"5vw"}} onChange={this.handleChange} placeholder="Type here"></input>
      <p>Input semester:</p>
      <input type="text" name='semester' style={{width:"5vw"}} onChange={this.handleChange1} placeholder="Type here"></input>
      <Button onClick={this.activeClick}>Filter</Button>
      
      <DataTable
        title="Subjects"
        columns={columns}
        data={this.state.tablelist}
      />
    </Container>
  );
}
}