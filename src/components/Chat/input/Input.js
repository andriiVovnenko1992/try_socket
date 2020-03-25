import React, { useState } from "react";
import { connect } from "react-redux";
import {ADD_MESSAGE} from "../../../constantes";

const Input = ({ addMsg, socket }) => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        addMsg(message, socket);
        setMessage('');
    };
    return (
        <>
            <div className="input-group mb-3">
            <input
                className="form-control"
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                aria-label
            />
                <div className="input-group-append">
                    <button
                        className="btn btn-primary"
                        type="button"
                        id="button-addon2"
                        onClick={sendMessage}
                    >
                        SEND
                    </button>
                </div>
            </div>
            </>
    );
};

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
    const createdAt = new Date();
    const addMsg = (text, socket) => dispatch({type: ADD_MESSAGE, payload: { text, socket, createdAt }});
    return {
        addMsg,
    }
};

export default connect(mapStateToProps,  mapDispatchToProps)(Input);
