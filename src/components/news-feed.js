import React, {Component} from 'react';
import NewsForm from '../components/news-form';
import NewsPost from '../components/news-post';
import SearchBar from '../components/search-bar';
import TeacherNewsFeed from '../components/teacher-news-feed';

export default class NewsFeed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          posts: [
            // {title:'Plata pentru banchet',category: 'General', content: 'Se apropie primul deadline din contract ( din data de 22 noiembrie ) in care vom plati pretul aferent cursului festiv. Astfel ca trebuie toti pana in data scadenta sa achitam cei 230 lei ( 200 lei pentru info germana ) aferenti cursului festiv. ',datetime:'12.09.2019'},
            {title:'Rezultate partial',category: 'Analiza', content: 'Rezultatele de la partial sunt afisate pe site-ul domnului profesor Nicolae Popovici',datetime:'13.11.2019'},
            {title:'',category: 'MPP', content: 'This is my first post!',datetime:'12.16.2020'},
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
            <SearchBar onFilter={this.handleFilter}/>
            {filteredPosts.length > 0 ? filteredPosts : posts}
            <NewsForm onSubmit={this.handleNewPost} />
          </div>
        )
      }
}