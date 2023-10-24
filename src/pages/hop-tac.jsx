import { useState } from 'react';
import Input from '../components/Input';
import Validate from '../ultil/validate';
import { useForm } from '../hooks/useForm';

function Contact() {
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

    /*    const [form, setForm] = useState({});
    const [error, setError] = useState({});

    const submit = () => {
        const errObject = Validate(form, {
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
        setError(errObject);

        // const errObject = {};

        // if (!form.name) {
        //     errObject.name = 'Họ và tên là bắt buộc';
        // }

        // if (!form.email) {
        //     errObject.email = 'Email là trường bắt buộc';
        // } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
        //     errObject.email = 'Email không đúng định dạng';
        // }

        // if (!form.phone) {
        //     errObject.phone = 'sđt là bắt buộc';
        // } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
        //     errObject.phone = 'Số điện thoại không đúng định dạng';
        // }

        // if (!form.website) {
        //     errObject.website = 'facebook URL là trường bắt buộc';
        // } else if (!/https?:\/\/(www\.)facebook.com\/[-a-zA-Z0-9]+/.test(form.website)) {
        //     errObject.website = 'yêu cầu đường link facebook';
        // }

        if (Object.keys(errObject).length === 0) {
            console.log('Thành Công');
        }
    };
 */
    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                    việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
                </p>
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

export default Contact;
