import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
import { path } from '../../config/path';

function Header() {
    const { onLogin, onLogout } = useAuth();

    // dùng useSelector để lấy user từ redux => file authReducer
    const { user } = useSelector((store) => store.auth);

    console.log('user header', user);
    return (
        <header id="header">
            <div className="wrap">
                <div className="menu-hambeger">
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <Link to="/" className="logo">
                    <img src="img/logo.svg" alt="" />
                    <h1>CFD</h1>
                </Link>
                <div className="right">
                    {user ? (
                        <div className="have-login">
                            <div className="account">
                                <a href="#" className="info">
                                    <div className="name">{user.name}</div>
                                    <div className="avatar">
                                        <img src={user.avatar} alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="hamberger"></div>
                            <div className="sub">
                                <Link to={path.ProfileLayout.MyCourse}>Khóa học của tôi</Link>
                                <Link to={path.ProfileLayout.Profile}>Thông tin tài khoản</Link>
                                <a href="#" onClick={onLogout}>
                                    Đăng xuất
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="not-login bg-none">
                            <a href="#" className="btn-register" onClick={onLogin}>
                                Đăng nhập
                            </a>
                            <a href="login.html" className="btn main btn-open-login">
                                Đăng ký
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
