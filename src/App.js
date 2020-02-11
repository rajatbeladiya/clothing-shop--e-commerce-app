import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignIn from './components/auth/sign-in/SignInContainer';
import SignUp from './components/auth/sign-up/SignUpContainer';
import './assets/styles/app.scss';
import CQTheme from './assets/mui/CQ';
import { auth } from './utils/firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.setState({ currentUser: null });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <MuiThemeProvider theme={CQTheme}>
        <BrowserRouter>
          <div className="main">
            <Header currentUser={currentUser} />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/shop" component={ShopPage} />
              <Route exact path="/sign-in" component={SignIn} />
              <Route exact path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
