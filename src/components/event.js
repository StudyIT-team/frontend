
import React from 'react';

export class EventComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let defaultAttributes ={... this.props.attributes};
        const event = this.props.event;
        const styles = this.props.styles;
        let bckgColor = "red";
        if (event.type == "SEMINARY"){
            bckgColor = "green";
        }
        if (event.type == "LABORATORY"){
            bckgColor = "orange";
        }
        defaultAttributes.style.backgroundColor = bckgColor;
        defaultAttributes.style.display = 'flex';
        defaultAttributes.style.borderRadius = '10px';
        defaultAttributes.padding = '5px';
        return (
            <div {...defaultAttributes} title={event.name} key={event.id} >
              <span className={styles.event_info}>[ {event.name} ]</span>
              <span className={styles.event_info}>
                {event.startTime.format("HH:mm")} -{" "}
                {event.endTime.format("HH:mm")}
              </span>
            </div>
        )
    }
}