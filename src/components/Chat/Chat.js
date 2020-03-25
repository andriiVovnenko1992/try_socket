import React, { useEffect, useState } from "react";
import openSocket from 'socket.io-client';
import { connect } from 'react-redux';
import Input from "./input/Input";
import Header from "./header/Header";
import MessagesList from "./MessagesList/MessagesList";
import {CONNECTED, NEW_MESSAGE, NEW_USER_CONNECTED, USER_DISCONNECTED, USERS_COUNT} from "../../constantes";
import { selectUserName } from './../../selectors';
import {bindActionCreators} from "redux";
import * as actions from './../../actionsCreators/index'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Participants from "../Participants/ParticipantsComponent";

const Chat = ({ newMessage, changeUsersCount, name }) => {
    const [socket, setSocket] = useState({});
    useEffect(() => {
        const  socket = openSocket('http://localhost:8000');
        socket.on('MESSAGES', (messages) => {
            messages.forEach(({ userName, message, createdAt }) => {
                newMessage(`${userName} | ${message} | ${createdAt}`);
            });
        });
        socket.on(USERS_COUNT, (users) => {
            changeUsersCount(users)
        });
        socket.on(NEW_MESSAGE, ({ message, userName, createdAt }) => {
                newMessage(`${userName} | ${message} | ${createdAt}`);
            });
        socket.on(CONNECTED, function (res, cb) {
            newMessage('You was connected');
            cb(name);
        });
        socket.on(NEW_USER_CONNECTED, (userName) => {
           newMessage(`${userName} was connected to chat`);
        });
        socket.on(USER_DISCONNECTED, (userName) => {
            newMessage(`${userName} was disconnected`);
        });
        setSocket(socket);
    },[name]);

    return (
        <>
            {!name ? <h1>You need to AUTH</h1> : (
                <div className="container">
                    <Router>
                    <Header name={name}/>
                    <div className="row">
                        <div className="col-12">
                            <Input socket={socket}/>
                        </div>
                    </div>
                    <div className="row">
                            <Route path="/chat" exact component={MessagesList} />
                            <Route path="/chat/participants/"  component={Participants} />
                    </div>
                    </Router>
                </div>
            )
            }
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        name: selectUserName(state),
    }
};

const mapDispatchToProps = (dispatch => {
    return bindActionCreators(actions, dispatch);
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
