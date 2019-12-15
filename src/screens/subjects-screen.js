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
    name: 'Description',
    selector: 'description',
    sortable: true,
    right: true,
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
      }
    }

    async componentDidMount() {
      const subjects = await SubjectsService.getSubjects();
      this.setState({ subjects: subjects.data });
    }

    handleChange1=(e) => {
      this.state.searchString1 = e.target.value;
    }

    render(){
      return (
        <Container style={{width:"30vw"}}>
      
      <DataTable
        title="Subjects"
        columns={columns}
        data={this.state.subjects}
      />
    </Container>)
    }

}
export default SubjectsScreen;