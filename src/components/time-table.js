import React, {Component} from 'react';
import moment from "moment";
import styles from '../misc/styles';
import Timetable from "react-timetable-events";
import { pink } from '@material-ui/core/colors';
import Draggable from 'react-draggable';
import { EventComponent } from './event';

export default class TimetableComponent extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            events : this.props.events,
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
                  <EventComponent event={event} attributes={defaultAttributes} styles={styles}/>
              );
            }
          }
        };
      
        shouldComponentUpdate(newProps, newState){
          console.log('new props',  newProps);
          this.state.events = newProps.events;
          return true;
        }
      render() {
        return <Timetable {...this.state} />;
      }
    }