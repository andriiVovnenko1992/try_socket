import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const MessagesList = ({ messages }) => {
    const colors = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
    ];
 return (
     <>
         <div className="col-12">
             <ul className="list-group">
                 {
                     messages.map((message, i) =>
                         <li
                             key={i}
                             className={`list-group-item list-group-item-${colors[Math.floor(i%colors.length)]}`}
                         >{message}
                         </li>
                     )
                 }
             </ul>
         </div>
     </>
 )
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    }
};

export default connect(mapStateToProps)(MessagesList);
