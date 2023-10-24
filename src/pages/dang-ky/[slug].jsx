import { useParams } from 'react-router-dom';
import useQuery from '../../hooks/useQuery';
import courseService from '../../services/courseService';
import Page404 from '../404';
import { currency } from '../../ultil';
import moment from 'moment/moment';
import { useForm } from '../../hooks/useForm';
import Input from '../../components/Input';

function Register() {
    const { id } = useParams();

    const { data, loading } = useQuery(() => courseService.getDetail(id), [id]);

    const { form, setForm, error, validate } = useForm({
        name: [{ required: true }],
        email: [
            {
                required: true,
            },
            {
                regexp: 'email',
                message: 'Bắt buộc đúng định dạng email',
            },
        ],
        phone: [
            {
                required: true,
            },
            {
                regexp: 'phone',
            },
        ],
        website: [
            {
                required: true,
            },
            {
                regexp: 'linkFB',
            },
        ],
    });

    const submit = () => {
        if (validate()) {
            console.log('thanh cong');
        }
    };

    if (loading) return <h1>Đang tải dữ liệu</h1>;
    if (!data) return <Page404 />;

    // libs moment sử dụng cho ngày tháng năm
    const date = moment(data.opening_titm);

    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">{data.title}</h1>
                        <div className="main-info">
                            <div className="date">
                                <strong>Khai giảng:</strong>
                                {date.format('DD/MM/YYYY')}
                            </div>
                            <div className="time">
                                <strong>Thời lượng:</strong> 18 buổi
                            </div>
                            <div className="time">
                                <strong>Học phí:</strong> {currency(data.money)} VND
                            </div>
                        </div>
                        <div className="form">
                            <Input
                                error={error.name}
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.currentTarget.value })}
                                name="Họ và tên"
                                placeholder="Họ và tên"
                                required
                            />
                            <Input
                                error={error.phone}
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.currentTarget.value })}
                                name="Số điện thoại"
                                placeholder="+84*****"
                                required
                            />
                            <Input
                                error={error.email}
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.currentTarget.value })}
                                name="Email"
                                placeholder="Email"
                                required
                            />
                            <Input
                                error={error.website}
                                value={form.website}
                                onChange={(e) => setForm({ ...form, website: e.currentTarget.value })}
                                name="Link facebook"
                                placeholder="Link facebook"
                            />
                            <div className="btn main rect" onClick={submit}>
                                đăng ký
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
    );
}

export default Register;
