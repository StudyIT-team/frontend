import React from "react";
import TimetableComponent from "../components/time-table";
import moment from "moment";
import { Container } from "@material-ui/core";
import { timetableService } from "../services/timetable-service";

const _events = {
  monday: [
    {
      id: 1,
      name: "Lab Medii de proiectare si programare",
      type: "lab",
      startTime: moment("2018-02-23T11:00:00"),
      endTime: moment("2018-02-23T13:00:00")
    }
  ],
  tuesday: [
    {
      id: 2,
      name: "Curs Analiza",
      type: "curs",
      startTime: moment("2018-02-22T12:00:00"),
      endTime: moment("2018-02-22T14:00:00")
    },
    {
      id: 3,
      name: "Seminar Arhitectura Sistemelor de Calcul",
      type: "seminar",
      startTime: moment("2018-02-22T14:00:00"),
      endTime: moment("2018-02-22T16:00:00")
    }
  ],
  wednesday: [],
  thursday: [],
  friday: [
    {
      id: 4,
      name: "Lab Metode Avansate de Programare",
      type: "lab",
      startTime: moment("2018-02-22T08:00:00"),
      endTime: moment("2018-02-22T10:00:00")
    }
  ]
};

export default class TimetableScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: {}
    };
  }

  async componentDidMount() {
    const events = await timetableService.fetchTimetable();
    this.setState({ events: events });
  }

  render() {
    return (
      <Container>
        <TimetableComponent events={this.state.events} />
      </Container>
    );
  }
}
