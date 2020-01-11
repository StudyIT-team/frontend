import React from 'react';
import { Container } from '@material-ui/core';
import AssignmentContainer from '../components/student-assignment-cont';

//const props = [ "description", "deadline", "forWhat", "no"]

const dummy = {
    teachers : [ {firstName: 'Motogna', lastName: 'Simona' }, { firstName: 'Tirban', lastName: 'Paul'}, {firstName: 'Guran', lastName: 'Adriana'}],
    subject: {name: 'Limbaje formale si tehnici de compilare'},
    myAssignments: [
        {   
            description: "Well, it's just for looking at the contents, once. You can also just put a break point and evaluate this.props in the debugger. Nowadays, even console.log will do the job (at least in Chrome you can expand values printed like that) - and even console.log is nothing to use in production. ",    
            deadline: '2019-04-04',
            forWhat: 'Seminary',
            no : 1
        },
        {
            description: "The approach being taken for 4.0 is to strip out all the batteries included kind of features and get back to just basic routing. If you need query string parsing or async loading or Redux integration or something else very specific, then you can add that in with a library specifically for your use case. Less cruft is packed in that you don't need and you can customize things to your specific preferences and needs.",
            deadline: '2019-12-21',
            forWhat: 'Lab',
            no : 4
        }
    ]
}


export default class StudentSubjectScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {

            teachers : [],
            news : [],
            subject: undefined,
            myAssignments: [],
            labAttendances : [],
            seminaryAttendances: [],

        }
    }


    componentDidMount(){
        this.setState({
            ...dummy
        })
    }

    mapProffesors(profs){
        return profs.map(prof => <li>Dr. {prof.firstName} {prof.lastName}</li>)
    }

    render(){
        console.log('RENDERING stud')
        if (this.state.subject == undefined){
            return <h1>Subject is loading</h1>
        }
        return (
            <div>
            <h1>{this.state.subject.name}</h1>
            <br/>
            <h3>Taught by:</h3>
            <ul>
                {this.mapProffesors(this.state.teachers)}
            </ul>
            <br/><br/>
            <h3>Course news</h3>
            {/* ce ne da andra     */}
            <h3>Assignments</h3>
            <h5>My assignments</h5>
            <AssignmentContainer assignments={this.state.myAssignments}/>
            </div>

        );
    }
}