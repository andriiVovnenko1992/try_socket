import { USERS_COUNT } from '../constantes'
const initState = 0;

export default (state = initState, action) => {
    switch (action.type) {
        case (USERS_COUNT): {
            const { usersCount } = action.payload;
            return usersCount;
        }
        default: return state;
    }
}
