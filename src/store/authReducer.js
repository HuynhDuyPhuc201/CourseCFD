import { getUser } from '../core/token';
import authService from '../services/authService';
import userService from '../services/userService';
import { AUTH_LOGIN, AUTH_LOGOUT } from './type';

let user = getUser();

const initialState = {
    user,
};
// {
//     tring: '',
//     payload: ...
// }

export const loginAction = (object) => {
    return async (dispatch) => {
        try {
            const result = await authService.login(object.form);
            if (result.data) {
                localStorage.setItem('token', JSON.stringify(result.data));

                const user = await userService.getInfo();

                if (user.data) {
                    localStorage.setItem('user', JSON.stringify(user.data));
                    // setIsOpenLoginModal(false);

                    // setUser(user.data);
                    // dispatch(loginAction(user.data));
                    dispatch({ type: AUTH_LOGIN, payload: user.data });
                    object.success();
                }
            }
        } catch (error) {
            object.error(error);
        } finally {
            object.finally();
        }
    };
};

export const logoutAction = () => {
    return {
        type: AUTH_LOGOUT,
    };
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                user: action.payload, //user: user.data
            };
        case AUTH_LOGOUT:
            return {
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;
