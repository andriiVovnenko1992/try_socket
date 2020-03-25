import React, { useState } from "react";
import { connect } from "react-redux";
import { SET_NAME } from './../../constantes/index';
import {Link} from "react-router-dom";
import Chat from "../Chat/Chat";

const Home = ({ initName }) => {
    const [name, setName] = useState('');
    return (
        <div className="container" >
            <div className="row">
                <div className="col-12">
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            aria-label
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-primary"
                                type="button"
                                id="button-addon2"
                                onClick={() => initName(name)}
                            >
                                SEND
                            </button>
                        </div>
                    </div>
                    <Link to="/chat" >GO CHAT</Link>
                </div>
            </div>
        </div>
    )

};

const mapStateToProps = (state) => {
};

const mapDispatchToProps = (dispatch) => {
    const initName = (name) => dispatch({type: SET_NAME, payload: { name } });
    return {
        initName,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
