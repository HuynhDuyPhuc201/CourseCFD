/* eslint-disable react/prop-types */

import { Link, generatePath } from 'react-router-dom';
import { COURSE_DETAIL } from '../config/path';

// eslint-disable-next-line react/prop-types
function Course({ thumbnailUrl, slug, id, course_status, short_description, title }) {
    const path = generatePath(COURSE_DETAIL, { slug, id });

    // console.log('slug', slug);
    // console.log('id', id);
    // console.log('path', path);

    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to={path}>
                    <img src={thumbnailUrl} alt="" />
                    <span className="badge b1">{course_status}</span>
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="img/icon-user-white.svg" alt="" />
                                12
                            </div>
                            <div className="heart">
                                <img src="img/icon-heart.svg" alt="" /> 100
                            </div>
                        </div>
                        <div className="share">
                            <img src="img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </Link>
                <div className="info">
                    <Link to={path}>{title}</Link>
                    <p className="des">{short_description}</p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">Tran Nghia</div>
                    </div>
                    <div className="register-btn">Đăng Ký</div>
                </div>
            </div>
        </div>
    );
}

export default Course;
