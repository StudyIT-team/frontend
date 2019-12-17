import React from 'react';
import TableNew from '../components/table';
import { Table } from 'material-ui';
import SubjectsService from '../services/subjects-service';
import DataTable from 'react-data-table-component';
import { Container, Button } from '@material-ui/core';
import { animateScroll } from "react-scroll";

const mandatory = ['Limbaje formale si tehnici de compilare','Proiect colectiv'
                    ,'Programare paralele si distribuita','Programare pentru dispozitive mobile'];

const optionals = ['Metode intelegente de recolvare a problemelor reale','Automatizarea proceselor business'
                  ,'Realitate virtuala','Interactiune om calculator', 'Prelucarea imaginilor', 
                  'Securitate software', 'Aspecte pragmatice in programare', 'Instruire asistata de calculator',
                  'Procesarea datelor video', 'Grafica pe calculator', 'Criptografie cu cheie publica', 
                  'Practica pedagogica observativa'];

class SubjectsScreen extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          subjects: [
            {category: mandatory[0], content: 'student enrolled'},
            {category: mandatory[1], content: 'student enrolled'},
            {category: mandatory[2], content: 'student enrolled'},
            {category: mandatory[3], content: 'student enrolled'}
          ],
          filteredSubjects: []
      }
      this.handleNewOptional= this.handleNewOptional.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
    }

    compare(subject, index){
      {console.log(!subject.category.localeCompare(mandatory[0]))}
      if (!subject.category.localeCompare(mandatory[0]) || 
        !subject.category.localeCompare(mandatory[1]) ||
        !subject.category.localeCompare(mandatory[2]) ||
        !subject.category.localeCompare(mandatory[3]) )
        return "";
      else
      return (<button className="button" key={index} type="button" onClick={() => this.handleRemove(index)}>
      X
    </button>);; 
    }
    handleRemove(i) {
      const values = this.state.subjects;
      values.splice(i, 1);
      this.setState({
        subjects: values
      });
    }

    handleNewOptional(subject) {
      this.setState({
        subjects: this.state.subjects.concat([subject])
      });
    }

    handleFilter(filter) {
      this.setState({
        filteredSubjects: this.state.subjects.filter((subject) =>
          subject.category.toUpperCase() === filter.toUpperCase() ||
            subject.content.includes(filter)
        )
      });
    }

    render() {
      const subjects = this.state.subjects.map((subject, index) =>
      <div key={index} value={subject}>
        {this.compare(subject,index)}
        <Subject key={index} value={subject}>
        </Subject>
        
      </div>
      );
      const filteredSubjects = this.state.filteredSubjects.map((subject, index) =>
      <div key={index} value={subject}>
       {console.log(subject.category, mandatory[0])}
       {this.compare(subject,index)}
      <Subject key={index} value={subject}>
      </Subject>
    </div>
      );
      return (
        <Container className="scrollable-auto">
        <div className="feed">
          <Filter onFilter={this.handleFilter} />
          {filteredSubjects.length > 0 ? filteredSubjects : subjects}
          <SubjectForm onSubmit={this.handleNewOptional} />
        </div>
        <div></div>
        </Container>
      )
    }
  }

class Subject extends React.Component {

    render(){
    return (
      <div className="post">
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
      optionals:optionals,
      optional:0
    }
  }

  handleSubmit(event) {
    this.props.onSubmit({
      category: this.category.value,
      content: 'student enrolled'
    });
    var elem = 0;
    var option = [];
    var cont = 0;
    option.length = optionals.length-1;
    for (var i  = 0; i<optionals.length;i++){
      if (optionals[i] == this.category.value){
        elem = i;
      }
      else{
        option[cont] = optionals[i];
        cont++;
      }
    }
    this.category.value = optionals[0];
    this.setState({
      optional: optionals.splice(elem,1),
    });
    this.setState({
      optionals: option,
    });
    this.content.value = 'student enrolled';
    event.preventDefault();
  }
  

  render() {
    return (
      <div className="subject-form" style={{marginBottom:"11px"}}>
        <form onSubmit={this.handleSubmit}>
          <label style={{fontSize:"30px"}}>
            Optionals you need to enroll:
            <br></br>
            <select ref={(input) => this.category = input}>
              {optionals.map((category, index) =>
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


export default SubjectsScreen;