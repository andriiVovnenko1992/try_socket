import {ADD_MESSAGE, NEW_MESSAGE} from "../constantes";

const initState = [];

export default (state = initState, action) => {
    switch (action.type) {
        case (ADD_MESSAGE): {
            const { socket, text, createdAt } = action.payload;
            socket.emit(ADD_MESSAGE, text);
            return [...state, `You | ${text} |  ${createdAt}`];
        }
        case (NEW_MESSAGE): {
            const { text } = action.payload;
            return [...state, text];
        }
        default: return state;
    }
}
