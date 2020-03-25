import {NEW_MESSAGE, USERS_COUNT} from "../constantes";

export const changeUsersCount = (usersCount) => ({type: USERS_COUNT, payload: {usersCount}});
export const newMessage = (text) => ({type: NEW_MESSAGE, payload: { text }});
