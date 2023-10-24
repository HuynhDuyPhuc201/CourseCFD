import api from '../config/api';
import { getToken } from '../core/token';

const userService = {
    getInfo() {
        const token = getToken();
        return api.get('/user/get-info', {
            headers: {
                // cấp quyền truy cập cho người dùng khi có token hợp lệ
                Authorization: `Bearer ${token.accessToken}`,
            },
        });
    },
    updateInfo(data) {
        return api.post('/user/update', data);
    },
    changePassword(data) {
        return api.post('/user/change-password', data);
    },
};

export default userService;
