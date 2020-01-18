import React, {Component} from 'react';
import NewsForm from '../components/news-form';
import NewsPost from '../components/news-post';
import SearchBar from '../components/search-bar';
import TeacherNewsFeed from '../components/teacher-news-feed';
import Paper from '@material-ui/core/Paper';



class AssignmentComponent extends React.Component{
    render() {

        const subject = this.props.subject;
        const assgn = this.props.assignment;
        const prof = this.props.prof;
        return (
  
          <div className="post">
              <div className="postTitle">
              <span className="label" style={{display: 'flex'}}>{subject.name}</span>
              </div>
              {this.optionalProf()}
              <div className="content">
              <span>{assgn.content}</span>
              </div>
              <div className="date">{assgn.deadline}</div>
        </div>
        )
      }

      optionalProf(){
          if (this.props.professor == undefined){
              return null;
          }
          console.log("prof", this.props.professor)
          return ( <div className="about">
        <span className="subject">{this.props.professor.firstName} {this.props.professor.lastName}</span>
          </div> );
      }

      mapDegree(degree){
          const big =  degree.toLowerCase()
          
      }

    }



export default class AssignmentList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          assignments: 
             []
          ,
          subject: undefined,
          filteredAssignments: []
        }
    
        this.handleFilter = this.handleFilter.bind(this);
      }


      componentWillReceiveProps(newProps){
        console.log('updated', newProps)
        this.state.assignments = newProps.assignments;
        this.state.filteredAssignments = newProps.assignments;
        
      }
    
      handleFilter(filter) {
        console.log('filter is', filter)
        filter = filter.trim()
        this.setState({
          filteredAssignments: this.state.assignments.filter((assign) =>
            this.props.subject.name.toUpperCase().includes( filter.toUpperCase()) ||
              assign.content.includes(filter) || filter === ""
          )
        });
      }
    
      render() {
          console.log("state", this.state)

        const filteredAssigns = this.state.filteredAssignments.map((assgn, index) =>
            <AssignmentComponent key={index} assignment={assgn} subject={this.props.subject} professor={this.props.professor}/>
        );
        return (
          // <div elevation={3} style={{display: 'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', marginTop: '100px'}}>
            <div className="feed">
            <SearchBar onFilter={this.handleFilter}/>
            {filteredAssigns}
            </div>
        )
      }
}