import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container';
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  DayView,
  Appointments,
  AppointmentTooltip
} from "@devexpress/dx-react-scheduler-material-ui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, pink } from "@material-ui/core/colors";

const theme = createMuiTheme({ palette: { type: "light", primary: pink } });

export default class TeacherTimetable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          title: "Parallel and Distributed Programming",
          startDate: new Date(2019, 11, 27, 12, 0),
          endDate: new Date(2019, 11, 27, 14, 0),
          id: 1,
          location: "L308"
        },
        {
          title: "Parallel and Distributed Programming",
          startDate: new Date(2019, 11, 27, 14, 0),
          endDate: new Date(2019, 11, 27, 16, 0),
          id: 2,
          location: "L308"
        },
        {
          title: "Parallel and Distributed Programming",
          startDate: new Date(2019, 11, 27, 16, 0),
          endDate: new Date(2019, 11, 27, 18, 0),
          id: 3,
          location: "L308"
        },
        {
          title: "Parallel and Distributed Programming",
          startDate: new Date(2019, 11, 27, 18, 0),
          endDate: new Date(2019, 11, 27, 20, 0),
          id: 4,
          location: "L001"
        }
      ]
    };
  }

  render() {
    const { data } = this.state;

    return (
      console.log(data),
      <Container maxWidth="m">
        <MuiThemeProvider theme={theme}>
          <Paper>
            <Scheduler data={data}>
              <ViewState currentDate="2019-12-26" />
              {/* <DayView startDayHour={8} endDayHour={20} /> */}
              <WeekView startDayHour={8} endDayHour={20} />
              <Appointments />
              <AppointmentTooltip />
            </Scheduler>
          </Paper>
        </MuiThemeProvider>
      </Container>
    );
  }
}