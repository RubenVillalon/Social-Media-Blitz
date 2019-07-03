import React from 'react';
import ReactDOM from 'react-dom';

//Setting up Redux:
import { Provider } from 'react-redux';
import store from './store/store';

//Setting up React-Router:
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//importing the acions:
import { userLoginDispatch } from './store/actions/index';
import { getFeed } from './store/actions/feedActions';

//Setting up the service worker:
import * as serviceWorker from './serviceWorker';

//Importing the components:
import Login from './components/Login/Login';
import Feed from './components/Feed/Feed';
import App from './components/App/App';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import UsersList from './components/UsersList/UsersList';
import UserDetails from './components/UserDetails/UserDetails';
import MyProfile from './components/MyProfile/MyProfile';

//importing High Order Components:
import AuthComponent from '../src/HOC/index.js';

//Setting up the token for all the components:
const token = localStorage.getItem('token');
if (token) {
	store.dispatch(userLoginDispatch(token));
	store.dispatch(getFeed());
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<App>
					<Route exact path="/" component={Home} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/users" component={AuthComponent(UsersList)} />
					<Route exact path="/feed" component={AuthComponent(Feed)} />
					<Route exact path="/users/:userId" component={AuthComponent(UserDetails)} />
					<Route exact path="/me" component={AuthComponent(MyProfile)} />
				</App>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
