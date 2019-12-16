import React, {Component} from 'react';
const categories = ['General','Analiza'];
export default class AddAssignment extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      this.props.onSubmit({
        title: this.title.value,
        content: this.content.value,
        deadline:this.deadline.value,
      });
      this.category.value = categories[0];
      this.content.value = '';
      this.deadline.value='';
      event.preventDefault();
    }
    render() {
      return (
        <div className="post-form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input type="text" ref={(input) => this.content = input} />
            </label>
            <label>
              Content:
              <input type="text" ref={(input) => this.content = input} />
            </label>
            <label>
              Deadline:
              <input type="text" ref={(input) => this.content = input} />
            </label>
            <button className="button">Submit</button>
          </form>
        </div>
      )
    }
  }