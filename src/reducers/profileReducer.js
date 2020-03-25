import {SET_NAME} from './../constantes';

const initState = {
    name: 'anonymous',
};

export default (state = initState, action) => {
    if (action.type === SET_NAME) {
        return { ...action.payload};
    } return state;
}
