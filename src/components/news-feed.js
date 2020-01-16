import React, {Component} from 'react';
import NewsForm from '../components/news-form';
import NewsPost from '../components/news-post';
import SearchBar from '../components/search-bar';
import TeacherNewsFeed from '../components/teacher-news-feed';
import Paper from '@material-ui/core/Paper';


export default class NewsFeed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          posts: 
             this.props.posts
          ,
          filteredPosts: []
        }
    
        this.handleNewPost = this.handleNewPost.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
      }

    
      handleNewPost(post) {
        this.setState({
          posts: this.state.posts.concat([post])
        });
      }
      componentWillReceiveProps(newProps){
        console.log('updated')
        this.state.posts = newProps.posts;
        this.state.filteredPosts = newProps.posts;
      }
    
      handleFilter(filter) {
        console.log('filter is', filter)
        filter = filter.trim()
        this.setState({
          filteredPosts: this.state.posts.filter((post) =>
            post.subjectDto.name.toUpperCase().includes( filter.toUpperCase()) ||
              post.content.includes(filter) || filter === ""
          )
        });
      }
    
      render() {
        const posts = this.state.posts.map((post, index) =>
          <NewsPost key={index} value={post} />
        );
        const filteredPosts = this.state.filteredPosts.map((post, index) =>
          <NewsPost key={index} value={post} />
        );
        return (
          // <div elevation={3} style={{display: 'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', marginTop: '100px'}}>
            <div className="feed">
            <SearchBar onFilter={this.handleFilter}/>
            {/* {filteredPosts.length > 0 ? filteredPosts : posts} */}
            {filteredPosts}
            </div>
        )
      }
}