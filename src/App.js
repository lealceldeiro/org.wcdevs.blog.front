import axios from 'axios';
import { UserManager } from "oidc-client";
import './App.css';
import React from 'react';

class AuthService {
  static instance = null;
  userManager = new UserManager({
    authority: "http://localhost:8888/auth/realms/wcdevs",
    client_id: "wcdevs-front-client",
    redirect_uri: "http://localhost:3000/login-callback.html",
    response_type: "id_token token",
    scope: "openid profile email"
  });

  constructor (){
    this.login = this.login.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  static getInstance() {
    if (this.instance == null) {
      this.instance = new AuthService();
    }
    return this.instance;
  }

  login() {
    return this.userManager.signinRedirect()
  }

  getUser() {
    return this.userManager.getUser();
  }
}

class Form extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get(`http://localhost:8080/post/`, {
      headers: {
        "Authorization": "Bearer " + sessionStorage.getItem("access_token")
      }
    });

    this.props.onSubmit(response.data);
  }

  render() {
    return (
        <form onSubmit={ this.handleSubmit }>
          <button>Fetch posts</button>
        </form>
    );
  }
}

class App extends React.Component {
  state = { posts: [] };
  auth = AuthService.getInstance();

  setPosts = (posts) => {
    this.setState(previous => ({
      posts: posts
    }))
  }

  render() {
    return (
        <div>
          <Form onSubmit={ this.setPosts }/>
          <div>
            { JSON.stringify(this.state.posts) }
          </div>
          <hr/>
          <button onClick={ this.auth.login }>Login</button>
        </div>
    )
  }
}

export default App;
