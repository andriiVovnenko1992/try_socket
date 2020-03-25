import React from "react";
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


const Header = ({ users, name }) => {
    return (
        <HeaderContainer>
                <span>Users in the Chat: {users}</span>
                <span>{name}</span>
                <Link to="/chat/participants">participants</Link>
        </HeaderContainer>
    )
};

const mapStateToProps = (state, { name }) => {
    return {
        users: state.users,
        name,
    }
};


export default connect(mapStateToProps)(Header);
