import React, {Component} from 'react';
const categories = ['General','Graph Algorithms','Parallel and Distributed Programming'];
export default class NewsForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      this.props.onSubmit({
        title: this.title.value,
        category: this.category.value,
        content: this.content.value
      });
      this.title.value='';
      this.category.value = categories[0];
      this.content.value = '';
      event.preventDefault();
    }
    render() {
      return (
        <div className="post-form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Category:
            </label>
            <label>
              <select ref={(input) => this.category = input}>
                {categories.map((category, index) =>
                  <option key={category} value={category}>{category}</option>
                )}
              </select>
            </label>
            <br></br>
            <label>
              Title:
              <input type="text" ref={(input) => this.title = input} />
            </label>
            <label>
              Content:
              <input type="text" ref={(input) => this.content = input} />
            </label>
            <button className="button">Post</button>
          </form>
        </div>
      )
    }
  }