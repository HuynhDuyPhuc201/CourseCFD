import { useEffect, useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../services/userService';
import { useDispatch } from 'react-redux';
import { removeToken, removeUser } from '../core/token';
import { logoutAction } from '../store/authReducer';

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    // TH nào truyền callback vào useState thay vì default value như bth?
    // - thực thi 1 logic nào đó, nó trả về giá trị, giá trị đó sẽ là default value cho lần đầu tiên
    const [user, setUser] = useState(() => {
        // const user = localStorage.getItem('user');
        // if (user) return JSON.parse(user);
        return null;
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

    const onLogin = (e) => {
        e.preventDefault();
        setIsOpenLoginModal(true);
    };

    const onLogout = (e) => {
        e.preventDefault();
        removeUser();
        removeToken();
        dispatch(logoutAction());
        // setUser(null);
        navigate('/');
    };

    // tự update info khi info được thay đổi trên Backend postman
    useEffect(() => {
        (async () => {
            let token = localStorage.getItem('token');
            if (token) {
                const user = await userService.getInfo();
                localStorage.setItem('user', JSON.stringify(user.data));
                setUser(user.data);
            }
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ setUser, user, onLogin, onLogout, isOpenLoginModal, setIsOpenLoginModal }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
