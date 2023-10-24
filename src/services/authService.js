import api from '../config/api';

const authService = {
    login(data) {
        return api.post('/login', data);
    },
    register(data) {
        return api.post('/register', data);
    },
    refreshToken(data) {
        return api.post('/refresh-token', data);
    },
};

export default authService;
