import React from 'react';
/*import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import ReactDOM from 'react-dom';*/
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Chat from './components/Chat/Chat';
import Home from "./components/Home/Home";
import messages from "./reducers/messagesReducer";
import users from "./reducers/usersReducer";
import profile from "./reducers/profileReducer";

const store = createStore(combineReducers({
    profile,
    messages,
    users,
}));

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/chat" component={Chat}/>
                </Switch>
            </Router>
        </Provider>
    )
};

export default App;
