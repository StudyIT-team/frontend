import React, {Component, Fragment} from 'react';
import NewsForm from '../components/news-form';
import NewsFeed from '../components/news-feed';
import SearchBar from '../components/search-bar';
import {timetableService } from '../services/timetable-service'
import newsService  from '../services/news-service'
import subjectsService from '../services/subjects-service';
import Select from 'react-select'

export default class TeacherNewsFeed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          posts: [
           
          ],
          subjects: [

          ],
          selectedSubject : undefined,
          professor: undefined
        }
    
        this.handleNewPost = this.handleNewPost.bind(this);
      }
      async componentDidMount(){
        const prof = await timetableService.fetchMeInfo();
        const subjects = await subjectsService.getTaughtSubjects(prof.id);
        this.setState({
          subjects: subjects,
          professor: prof
        })
      }
    
      async handleNewPost(post) {

        console.log(this.state)
        if (this.state.selectedSubject == undefined){
          alert("Please select subject");
          return;
        }
        await newsService.addNews( {
          title: post.title,
          content: post.content,
          subjectId: this.state.selectedSubject.value.subject.id
        })
        await this.handleSelectSubject(this.state.selectedSubject)
      }


      async handleSelectSubject(subject){
        this.setState({
          selectedSubject : subject
        })
        const news = await newsService.getTeacherNews(subject.value.subject.id);
        this.setState({
          posts: news
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

        const subjects = this.mapSubjectsToOptions(this.state.subjects);
        if (subjects.length == 0){
          return null;
        }
        return (
          <div className="feed" style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
             <label class="label">Your subjects</label>
            <br/>
          <Fragment style={{margin: '35px !important'}}>
          <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={subjects[0]}
          // isDisabled={isDisabled}
          // isLoading={isLoading}
          // isClearable={isClearable}
          // isRtl={isRtl}
          //isSearchable={isSearchable}
          onChange={this.handleSelectSubject.bind(this)}
          name="color"
          options={subjects}
          
          />
          </Fragment>
          <br/>
          <label class="label">Add a new post:</label>
            <NewsForm onSubmit={this.handleNewPost} />
          <NewsFeed posts={this.state.posts}/>
          </div>
        )
      }
}