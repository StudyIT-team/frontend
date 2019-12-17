import React, { Component } from "react";
import AddAssignment from "../components/add-assignment";
import Assignment from "../components/assignment";

export default class AssignmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title: "Assignment 1",
          content:
            "Given a sequence of n numbers, compute the sums of the first k numbers, for each k between 1 and n. Parallelize the computations, to optimize for low latency on a large number of processors. Use at most 2*n additions, but no more than 2*log(n) additions on each computation path from inputs to an output. Example: if the input sequence is 1 5 2 4, then the output should be 1 6 8 12.",
          deadline: "Week 9"
        }
      ],
      filteredPosts: []
    };

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
      filteredPosts: this.state.posts.filter(
        post =>
          post.category.toUpperCase() === filter.toUpperCase() ||
          post.content.includes(filter)
      )
    });
  }

  render() {
    const posts = this.state.posts.map((post, index) => (
      <Assignment key={index} value={post} />
    ));
    const filteredPosts = this.state.filteredPosts.map((post, index) => (
      <Assignment key={index} value={post} />
    ));
    return (
      <div className="feed">
        <label class="label">
          Add a new assignment:
        </label>
        <AddAssignment onSubmit={this.handleNewPost} />
        
        <label class="label">Other assignments:</label>
        {filteredPosts.length > 0 ? filteredPosts : posts}
      </div>
    );
  }
}
