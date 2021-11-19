import axios from 'axios';
import './App.css';
import React from 'react';

class Form extends React.Component {
  state = { posts: [] };
  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://localhost:8080/post/`);

    this.props.onSubmit(response.data);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <button>Fetch posts</button>
        </form>
    );
  }
}

class App extends React.Component {
  state = { posts: [] };

  setPosts = (posts) => {
    this.setState(previous => ({
      posts: posts
    }))
  }
  render() {
    return (
        <div>
          <Form onSubmit={this.setPosts}/>
          <div>
            {JSON.stringify(this.state.posts)}
          </div>
        </div>
    )
  }
}

export default App;
