import React from 'react';
import Timetable from '../components/nex-timetable';
import {timetableService} from '../services/timetable-service';
import { Container } from '@material-ui/core';


export default class TeacherTimetableScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [
       
      ],
      professorId : 0
    };
  }

  async componentDidMount(){
    const meData = await timetableService.fetchMeInfo();
    this.setState({
      professorId : meData.id
    })
    const events = await timetableService.fetchTeacherTimetable(meData.id);
    this.setState({
      events: events
    })
  }

  redirectToDetails(subjectId){
    console.log('redirecting', this.state.professorId, subjectId)
  }

  render() {
    const { data } = this.state;

    return (
      <Container>
      <Timetable events={this.state.events} redirect={this.redirectToDetails.bind(this)}/>
      </Container>
    );
  }
}