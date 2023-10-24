import api from '../config/api';

const courseService = {
    getList() {
        return api.get(`/elearning/v4/courses`);
    },
    getDetail(id) {
        return api.get(`/elearning/v4/courses/${id}`);
    },
    getRegister(id) {
        return api.post(`/elearning/v4/course-register/${id}`);
    },
};

export default courseService;
