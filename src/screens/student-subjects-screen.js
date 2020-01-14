import React from 'react';
import TableNew from '../components/table';
import { Table } from 'material-ui';
import subjectService from '../services/subjects-service';
import DataTable from 'react-data-table-component';
import { Container, Button } from '@material-ui/core';
import { animateScroll } from "react-scroll";

const mandatory = ['Limbaje formale si tehnici de compilare','Proiect colectiv'
                    ,'Programare paralele si distribuita','Programare pentru dispozitive mobile'];

const optionals = ['Metode inteligente de rezolvare a problemelor reale','Automatizarea proceselor de business'
                  ,'Realitate virtuala', 
                  'Securitate software', 'Aspecte pragmatice in programare', 'Instruire asistata de calculator',
                  'Procesarea datelor audio-video', 'Grafica pe calculator', 'Criptografie cu cheie publica', 
                  'Practica pedagogica observativa'];

class StudentSubjectsScreen extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          subjects: [

          ],
          optionalSubjects: [],
          filteredSubjects: [],
          _filledOptionalSubjects: [],
          enrollments: []
      }
      this.handleNewOptional= this.handleNewOptional.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
      this.subjectService = subjectService;
      this.addForm = null;
    }


    mapEnrollmentsToSubjects(enrollments){
      return enrollments.map(enroll => {
        return {
          id: enroll.subjectDto.id,
          category: enroll.subjectDto.name,
          content: 'student enrolled'
        }
      });
    }

    async componentDidMount(){
      const values = await this.subjectService.getSubjects();
      this.completeSettingSubjects(values)
      this.setOptionalInfo();
    
    }

    getOptionalId(optional){
      console.log("Optional name", optional)
      for(let i = 0; i < this.state._filledOptionalSubjects.length; i++){
        const opt = this.state._filledOptionalSubjects[i];
        console.log("Searched optional", opt)
        if(optional.category === opt.name){
          return opt.id
        }
      }
      return null;
    }

    completeSettingSubjects(values){
      const allSubjects = this.mapEnrollmentsToSubjects(values);
      this.setState({
        subjects: allSubjects.filter(sbj => optionals.indexOf(sbj.category) === -1), 
        optionalSubjects: allSubjects.filter(sbj => optionals.indexOf(sbj.category) !== -1 ),
        enrollments: values
      })
    }

    async setOptionalInfo(){
      const optionalList = await this.subjectService.getOptionalSubjects(optionals);
      this.setState({
        _filledOptionalSubjects: optionalList
      })
    }

    
    async handleRemove(id) {
      console.log("optional subject ids", this.state.optionalSubjects)
      const values = this.state.optionalSubjects.filter(sbj => sbj.id !== id);
      this.setState({
        optionalSubjects: values
      });
      let enrollmentId = this.findEnrollmentId(id);
      await this.subjectService.deleteOptionalSubscription(enrollmentId);
    }

    findEnrollmentId(subjectId){
      for(let i = 0 ; i < this.state.enrollments.length; i++){
        const enrollment = this.state.enrollments[i];
        const subject = enrollment.subjectDto;
        if (subject.id === subjectId){
          return enrollment.id;
        }
      }
      return null;
    }

    async handleNewOptional(subject) {
      this.setState({
        optionalSubjects: this.state.optionalSubjects.concat([subject])
      });
      const optionalId = this.getOptionalId(subject);
      const enrolls = await this.subjectService.enrollAtSubject(optionalId);
      console.log("enrolls new list", enrolls)
      const newEnrolls = JSON.parse(JSON.stringify(this.state.enrollments))
      newEnrolls.push(enrolls[0])
      this.setState({
        enrollments: newEnrolls
      })
      //this.completeSettingSubjects(enrolls);
    }


    handleFilter(filter) {
      this.setState({
        filteredSubjects: this.state.subjects.filter((subject) =>
          subject.category.toUpperCase() === filter.toUpperCase() ||
            subject.content.includes(filter)
        )
      });
    }

    mapSubjectsToRender(subjects){
      return subjects.map((subject) =>
      <div  value={subject}>
        <Subject key={subject.id} value={subject} handleRemove={this.handleRemove.bind(this)}>
        </Subject>
    
      </div>
      );
    }

    filterOptionals(){
      const filteredOptionals = optionals.filter(optName => {
        if(this.state.optionalSubjects.map(sbj => sbj.category).indexOf(optName) === -1){
          return true;
        } 
        return false;
      })
      console.log(this.state.optionalSubjects, filteredOptionals)
      return filteredOptionals;
    }

    render() {
      const subjects = this.mapSubjectsToRender(this.state.subjects);
      const optionalSubjects = this.mapSubjectsToRender(this.state.optionalSubjects);

    //   const filteredSubjects = this.state.filteredSubjects.map((subject, index) =>
    //   <div key={index} value={subject}>
    //    {console.log(subject.category, mandatory[0])}
    //    {this.compare(subject,index)}
    //   <Subject key={index} value={subject}>
    //   </Subject>
    // </div>
      // );

      return (
        <Container className="scrollable-auto">
        <div className="feed">
          <Filter onFilter={this.handleFilter} />
          {/* {filteredSubjects.length > 0 ? filteredSubjects : subjects} */}
          {subjects}
          <label style={{fontSize:"30px", marginBottom: '30px'}}>
          {optionalSubjects.length ? "Optional subjects:" : null}
          {optionalSubjects}
          </label>
          <SubjectForm  ref={reference => this.addForm = reference}  onSubmit={this.handleNewOptional} optionalSubjectList={this.filterOptionals()}/>
        </div>
        <div></div>
        </Container>
      )
    }
  }



class Subject extends React.Component {


  handleRemove(event){
      this.props.handleRemove(this.props.value.id)
      event.preventDefault();
  }

    mapX(){
      if (optionals.indexOf(this.props.value.category) !== -1){
      return (<button className="button" type="button" onClick={this.handleRemove.bind(this)}>
      X
     </button>);
      }
      else
      return null;
     ; 
    
    }

    render(){
    return (
      <div className="post">
        {this.mapX()}
        <span className="label">{this.props.value.category}</span>
        <span className="content">{this.props.value.content}</span>
      </div>
    );  
    }
}

class SubjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      content: 'student enrolled',
      optionals: JSON.parse(JSON.stringify(this.props.optionalSubjectList)),
      optional: 0
    }
  }
  
  componentDidUpdate(prevProps){
    this.state.optionals = this.props.optionalSubjectList  
    return true;
  }

  handleSubmit(event) {
    this.props.onSubmit({
      category: this.category.value,
      content: 'student enrolled'
    });
    var elem = 0;
    var option = [];
    var cont = 0;
    option.length = this.state.optionals.length-1;
    for (var i  = 0; i<this.state.optionals.length;i++){
      if (this.state.optionals[i] == this.category.value){
        elem = i;
      }
      else{
        option[cont] = this.state.optionals[i];
        cont++;
      }
    }
    this.category.value = this.state.optionals[0];
    this.setState({
      optional: this.state.optionals.splice(elem,1),
    });
    this.setState({
      optionals: option,
    });
    this.content.value = 'student enrolled';
    event.preventDefault();
  }
  
  addOptional(optionalName){
    const newOptionalList = JSON.parse(JSON.stringify(this.state.optionals))
    newOptionalList.push(optionalName);
    this.setState({
      optionals : newOptionalList
    })
  }

  render() {
    
    return (
      <div className="subject-form" style={{marginBottom:"11px"}}>
        <form onSubmit={this.handleSubmit}>
          <label style={{fontSize:"30px"}}>
            Optionals you need to enroll:
            <br></br>
            <select ref={(input) => this.category = input}>
              {this.state.optionals.map((category, index) =>
                <option key={index} value={category}>{category}</option>
              )}  
              
              
            </select>
          </label>
          <label style={{display:"none"}}>
            Content:
            <input type="text" ref={(input) => this.content = input} />
          </label>
          <button className="button">Submit</button>
        </form>
      </div>
    )
  }
}

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'enrolled'};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleKeyUp(event) {
    if (event.key === 'Enter') {
      this.props.onFilter(this.state.value);
    }
  }

  render() {
    return (
      <div>
        <label>
          <input type="search" value={this.state.value}
                               onChange={this.handleChange}
                               onKeyUp={this.handleKeyUp}
                               placeholder="Filter by category or content..." />
        </label>
        <br></br>
        <label style={{fontSize:"30px"}}>
          Mandatory subjects:
        </label>
      </div>
    )
  }
}


export default StudentSubjectsScreen;