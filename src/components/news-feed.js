import React, {Component} from 'react';
import NewsForm from '../components/news-form';
import NewsPost from '../components/news-post';
import SearchBar from '../components/search-bar';

export default class NewsFeed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          posts: [
            {title:'Bursele Telekom: De 10 ani, sprijinim performanța',category: 'General', content: 'În acest weekend, vă invităm la Cluj-Napoca la Zilele SuperTeach.De ce credem în proiectul SuperTeach​ și de ce vă propunem să participați la eveniment​ în materialul publicat pe blog.În premieră evenimentul este adresat atât profesorilor cât și părinților, bunicilor, tuturor celor interesați de educație.În același material, veți regăsi detalii legate de program și înregistrare. Vă așteptăm sâmbătă, 2 noiembrie la conferință și duminică, 3 noiembrie la workshop începând cu ora 11:30.',datetime:'12.16.2020'},
            {category: 'Analiza', content: 'This is my second post!',datetime:'13.17.2019'},
            {category: 'MPP', content: 'This is my first post!',datetime:'12.16.2020'},
            {title:'Plata pentru banchet',category: 'General', content: 'Se apropie primul deadline din contract ( din data de 22 noiembrie ) in care vom plati pretul aferent cursului festiv. Astfel ca trebuie toti pana in data scadenta sa achitam cei 230 lei ( 200 lei pentru info germana ) aferenti cursului festiv. ',datetime:'12.09.2019'},
            {title:'Rezultate partial',category: 'Analiza', content: 'Rezultatele de la partial sunt afisate pe site-ul domnului profesor Nicolae Popovici',datetime:'13.11.2019'},
            // {title:'',category: 'MPP', content: 'This is my first post!',datetime:'12.16.2020'},
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
          </div>
        )
      }
}