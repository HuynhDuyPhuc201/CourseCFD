import { NavLink, Navigate, Outlet } from 'react-router-dom';
import {
    PROFILE_COIN_PATH,
    PROFILE_COURSE_PATH,
    PROFILE_PATH,
    PROFILE_PAYMENT_PATH,
    PROFILE_PROJECT_PATH,
    path,
} from '../../../config/path';
import { useAuth } from '../../../hooks/useAuth';

function ProfileLayout() {
    const { user } = useAuth();

    if (!user) return <Navigate to="/" />;
    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        <img src={user.avatar} alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">{user.name}</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            {/* end: để nó tìm chính xác link */}
                            <NavLink end to={PROFILE_PATH}>
                                Thông tin tài khoản
                            </NavLink>
                            <NavLink to={path.ProfileLayout.MyCourse}>Khóa học của bạn</NavLink>
                            <NavLink to={path.ProfileLayout.Project}>Dự án đã làm</NavLink>
                            <NavLink to={path.ProfileLayout.Payment}>Lịch sử thanh toán</NavLink>
                            <NavLink to={path.ProfileLayout.Coin}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProfileLayout;
