import React, {Component} from 'react';
import NewsForm from '../components/news-form';
import NewsPost from '../components/news-post';
import SearchBar from '../components/search-bar';

export default class TeacherNewsFeed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          posts: [
            {title: 'Assignment no 5', category:'Parallel and Distributed Programming',content:'The deadline for assignment 5 is postponed.'},
          ],
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
    
      handleFilter(filter) {
        this.setState({
          filteredPosts: this.state.posts.filter((post) =>
            post.category.toUpperCase() === filter.toUpperCase() ||
              post.content.includes(filter)
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
          <div className="feed">
            <NewsForm onSubmit={this.handleNewPost} />
            <label>
              Your posts:
            </label>
            <label class="label">Add a new post:</label>
            <NewsForm onSubmit={this.handleNewPost} />
            <label class="label">Other posts:</label>
            {filteredPosts.length > 0 ? filteredPosts : posts}
          </div>
        )
      }
}