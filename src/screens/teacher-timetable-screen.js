import React from "react";
import { Container } from "@material-ui/core";
import Timetable from "react-timetable-events";
import moment from "moment";

export default class TeacherTimetable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // events: this.props.events,
      hoursInterval: [8, 20],
      timeLabel: "Hour",

      renderHour(hour, defaulAttributes, styles) {
        return (
          <div {...defaulAttributes} key={hour}>
            {hour}
          </div>
        );
      },
      renderEvent(event, defaultAttributes, styles) {
        return (
          <div
            {...defaultAttributes}
            onClick={() => {
              console.log("hello" + event.id);
            }}
            title={event.name}
            key={event.id}
          >
            <span className={styles.event_info}>[ {event.name} ]</span>
            <span className={styles.event_info}> {event.formation} </span>
            <span className={styles.event_info}>
              {event.startTime.format("HH:mm")} -{" "}
              {event.endTime.format("HH:mm")}
            </span>
          </div>
        );
      },

      events: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [
          {
            id: 1,
            name: "Programare Paralelă și Distribuită",
            formation: "931/1",
            type: "lab",
            startTime: moment("2018-02-22T12:00:00"),
            endTime: moment("2018-02-22T14:00")
          },
          {
            id: 2,
            name: "Programare Paralelă și Distribuită",
            formation: "932/1",
            type: "lab",
            startTime: moment("2018-02-22T14:00"),
            endTime: moment("2018-02-22T16:00")
          },
          {
            id: 3,
            name: "Programare Paralelă și Distribuită",
            formation: "931/2",
            type: "lab",
            startTime: moment("2018-02-22T16:00"),
            endTime: moment("2018-02-22T18:00")
          },
          {
            id: 4,
            name: "Programare Paralelă și Distribuită",
            formation: "932/2",
            type: "lab",
            startTime: moment("2018-02-22T18:00"),
            endTime: moment("2018-02-22T20:00")
          }
        ]
      }
    };
  }

  render() {
    return (
      <Container>
        <Timetable {...this.state} />
      </Container>
    );
  }
}
