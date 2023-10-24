import ReactDOM from 'react-dom';

import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../store/authReducer';
import { useForm } from '../hooks/useForm';
import styled from 'styled-components';

const ErrorText = styled.p`
    color: red;
`;

function LoginModal() {
    const { isOpenLoginModal, setIsOpenLoginModal } = useAuth();
    const [isFetching, setIsFetching] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const [form, setForm] = useState({});

    const { form, setForm, error, validate } = useForm({
        username: [{ required: true }, { regexp: 'email' }],
        password: [
            { required: true },
            { min: 6, max: 32 },
            { regexp: 'password', message: 'Password phải chứa kí tự thường, hoa, số và kí tự đặc biệt' },
        ],
    });

    const dispatch = useDispatch();

    const onSubmit = async () => {
        // dùng async await phải có try catch để bắt lỗi await
        setIsFetching(true);

        if (validate()) {
            dispatch(
                loginAction({
                    form,
                    success: () => {
                        setIsOpenLoginModal(false);
                    },
                    error: (error) => {
                        setErrorMessage(error.message);
                    },
                    finally: () => {
                        setIsFetching(false);
                    },
                }),
            );
        }

        // try {
        //     const result = await authService.login(form);
        //     if (result.data) {
        //         localStorage.setItem('token', JSON.stringify(result.data));

        //         const user = await userService.getInfo();

        //         if (user.data) {
        //             localStorage.setItem('user', JSON.stringify(user.data));
        //             setIsOpenLoginModal(false);

        //             // setUser(user.data);
        //             dispatch(loginAction(user.data));
        //             // dispatch({ type: AUTH_LOGIN, payload:  });
        //         }
        //     }
        // } catch (error) {
        //     setErrorMessage(error.message);
        // } finally {
        //     setIsFetching(false);
        // }
    };

    return ReactDOM.createPortal(
        <div className="popup-form" style={{ display: isOpenLoginModal ? 'flex' : 'none' }}>
            <div className="wrap">
                <div className="ct_login">
                    <h2 className="title">Đăng nhập</h2>
                    <input
                        onChange={(e) => (form.username = e.currentTarget.value)}
                        type="text"
                        placeholder="Email / Số điện thoại"
                    />
                    {error.username && <ErrorText>{error.username}</ErrorText>}
                    <input
                        onChange={(e) => (form.password = e.currentTarget.value)}
                        type="text"
                        placeholder="Mật khẩu"
                    />
                    {error.password && <ErrorText>{error.password}</ErrorText>}
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">
                            Quên mật khẩu?
                        </a>
                    </div>
                    <div className="btn rect main btn-login" onClick={onSubmit}>
                        đăng nhập
                    </div>
                    {errorMessage && (
                        <p
                            style={{
                                fontSize: '12px',
                                color: 'red',
                            }}
                        >
                            {errorMessage}
                        </p>
                    )}
                    <div className="close" onClick={() => setIsOpenLoginModal(false)}>
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>,
        document.body,
    );
}

export default LoginModal;
