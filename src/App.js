import axios from 'axios';
import { UserManager } from "oidc-client";
import './App.css';
import React from 'react';

class AuthService {
  static instance = null;
  // all following args need to be set dynamically somehow (maybe using some env variables)
  // https://cognito-idp.<region>.amazonaws.com/<user_pool_id>/.well-known/openid-configuration contains a very useful info
  // authority for cognito: https://cognito-idp.<region>.amazonaws.com/<user_pool_id>/
  userManager = new UserManager({
    authority: "https://cognito-idp.eu-west-3.amazonaws.com/eu-west-3_CwGqpTcvR/",
    client_id: "1ulc81ps52d6mde5kae3mllv68",
    redirect_uri: "https://wcdevs.org/login-callback.html",
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

    const response = await axios.get(`https://api.wcdevs.org/post/`, {
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
