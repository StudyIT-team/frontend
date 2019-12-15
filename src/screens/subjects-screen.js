import React from 'react';
import TableNew from '../components/table';
import { Table } from 'material-ui';
import SubjectsService from '../services/subjects-service';
import DataTable from 'react-data-table-component';
import { Container, Button } from '@material-ui/core';

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

class SubjectsScreen extends React.Component {

    // render() {
    //     return (
    //       <TableNew>
            
    //       </TableNew>
    //     );
    // }

    constructor(props) {
      super(props);
      this.state = {
          subjects: {},
          searchString1:''
      }
    }

    // async componentDidMount() {
    //   const subjects = await subjectsService.getSubjects();
    //   this.setState({ subjects: subjects.data });
    // }

    handleChange1=(e) => {
      this.state.searchString1 = e.target.value;
    }

    async activeClick(semester){
      const subjects = await SubjectsService.getSubjects(semester);
      this.setState({ subjects: subjects.data });
    }

    render(){
      return (
        <Container style={{width:"30vw"}}>
      {/* <p>Input year:</p>
      <input type="text" name='year' style={{width:"5vw"}} onChange={this.handleChange} placeholder="Type here"></input> */}
      <p>Input semester:</p>
      <input type="text" name='semester' style={{width:"5vw"}} onChange={this.handleChange1} placeholder="Type here"></input>
      <Button onClick={this.activeClick}>Filter</Button>
      
      <DataTable
        title="Subjects"
        columns={columns}
        data={this.state.subjects}
      />
    </Container>)
    }

}
export default SubjectsScreen;