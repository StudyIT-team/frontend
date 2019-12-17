import React, {Component} from 'react';
import AddAssignment from '../components/add-assignment';
import Subject from '../components/subject';



export default class TeacherSubjectsList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          posts: [
            {title:'Graph Algorithms'},
            {title:'Parallel and distributed programming'},
          ],
          filteredPosts: []
        }
    
      }

    
      render() {
        const posts = this.state.posts.map((post, index) =>
          <Subject key={index} value={post} />
        );
        const filteredPosts = this.state.filteredPosts.map((post, index) =>
          <Subject key={index} value={post} />
        );
        return (
          <div className="feed">
            <label class="label">Your subjects:</label>
            {filteredPosts.length > 0 ? filteredPosts : posts}
          </div>
        )
      }
}