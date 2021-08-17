import React from 'react';
import { observer } from "mobx-react"
import Userstore from './Stores/Userstore';
import LoginForum from './LoginForm';
import SubmitButton from './Stores/SubmitButton';
import './App.css';
import Footer from './Stores/Footer';
import Headers from "./Stores/Headers";

class App extends React.Component {

  async componentDidMount() {

    try {

      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success) {
        Userstore.loading = false;
        Userstore.isLoggedin = true;
        Userstore.username = result.username;
      }

      else {
        Userstore.loading = false;
        Userstore.isLoggedin = false;
      }

    }

    catch(e) {
      Userstore.loading = false;
      Userstore.isLoggedin = false;

    }

  }

  async doLogout() {

    try {

      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success) {
         Userstore.isLoggedin = true;
         Userstore.username = '';
      }


    }

    catch(e) {
      Userstore.loading = false;
      Userstore.isLoggedin = false;

    }

  }

  render() {

    if(Userstore.loading) {
      return (
        <div className="app">
          <div className='container'>
            Loading, please wait ...
          </div>
        </div>
      );
    }

    else {

      if(Userstore.isLoggedin) {
        return (
          <div className="app">
            <div className='container'>
             Welcome {Userstore.username}

             <SubmitButton
             text={"Log out"}
             disabled={false}
             onClick={ () => this.doLogout() }
             />
            </div>
          </div>
        );
      }
      }

    return (
      <div className="app">
        <Headers />
        <div className='container'>
        <b> SSAB BANK</b>
          <LoginForum />
          </div>
          <Footer />
          </div>
    );

  }

}

export default observer(App);
