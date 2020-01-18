import React, { Component, Fragment } from "react";
import AddAssignment from "./add-assignment";
import Assignment from "./assignment";
import {timetableService} from '../services/timetable-service';
import subjectsService from '../services/subjects-service';
import assignmentService from '../services/assignment-service';
import AssignmentList from "./assignment-list";
import Select from 'react-select'
import DatePicker from "react-datepicker";
import {getDateInFormat} from '../misc/time-utils';
 
import "react-datepicker/dist/react-datepicker.css";


class AssignmentForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        selectedDate : new Date()
      }
    }
  

    formatDate(){
      return getDateInFormat(this.state.selectedDate)
    }

    handleSubmit(event) {
      this.props.onSubmit({
        deadline: this.formatDate(),
        content: this.content.value
      });
      this.content.value = '';
      event.preventDefault();
    }

    changeDate(newDate){
      this.setState({
        selectedDate : newDate
      })
    }

    render() {
      return (
        <div className="post-form">
            <label>
              Deadline:
              <DatePicker
           selected={this.state.selectedDate}
             onChange={this.changeDate.bind(this)}
              />
            </label>
            <label>
              Content:
              <input type="text" ref={(input) => this.content = input} />
            </label>
            <div onClick={this.handleSubmit.bind(this)} className="button">Post</div>
        </div>
      )
    }
  }

export default class AssignmentAddComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [

      ],
      selectedSubject : undefined,
      professor: undefined,
      assignments: []
    };

    this.handleNewPost = this.handleNewPost.bind(this);
  }

  async handleNewPost(assgn) {

    console.log('NEW ASSG',this.state)
    if (this.state.selectedSubject == undefined){
      alert("Please select subject");
      return;
    }
    await assignmentService.addAssign(
      assgn.content, assgn.deadline, this.state.selectedSubject.value.subject.id, this.state.professor.id);

    await this.handleSelectSubject(this.state.selectedSubject)
  }

  async componentDidMount(){
    const prof = await timetableService.fetchMeInfo();
    const subjects = await subjectsService.getTaughtSubjects(prof.id);
    console.log("Subjects", subjects)
    this.setState({
      subjects: subjects,
      professor: prof,
      selectedSubject: { value : subjects[0], label : subjects[0].name}
    })
  }

  async handleSelectSubject(subject){
    this.setState({
      selectedSubject : subject
    })
    // const assignments = await newsService.getTeacherNews(subject.value.subject.id);
    // this.setState({
    //   posts: news
    // })
    const assignments = await assignmentService.getAssignments(subject.value.subject.id)
    this.setState({
      assignments: assignments
    })
  }    

  mapSubjectsToOptions(subjects){
    return subjects.map(sbj => {
        return {
          value: sbj,
          label : sbj.subject.name
        }
    });
  }


  render() {
   
    console.log("ADD STATE", this.state)
    const subjects = this.mapSubjectsToOptions(this.state.subjects);
    if (subjects.length == 0){
      return null;
    }
    return (
      <div className="feed" style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
         <label className="label">Your subjects</label>
        <br/>
      <Fragment style={{margin: '35px !important'}}>
      <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={subjects[0]}
      onChange={this.handleSelectSubject.bind(this)}
      name="color"
      options={subjects}
      
      />
      </Fragment>
      <br/>
      <label className="label">Add a new assignment:</label>
        <AssignmentForm onSubmit={this.handleNewPost} />
      { this.state.selectedSubject !=  undefined ? <AssignmentList  professor={this.state.professor} assignments={this.state.assignments} subject={this.state.selectedSubject.value.subject}/> : null}
      </div>
    )
  }
}
