import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import userService from '../../services/userService';
import Input from '../../components/Input';
import { useRef } from 'react';

function Profile() {
    const { user } = useAuth();

    const [form, setForm] = useState({});
    const [err, setErr] = useState();
    const [fetching, setIsFetching] = useState(false);
    const [mess, setMess] = useState(false);

    console.log('form', form);
    console.log('user', user);

    const inputRef = useRef();
    const onUpdateInfo = async () => {
        try {
            setIsFetching(true);
            const update = await userService.updateInfo(form);
            console.log('update', update);
        } catch (err) {
            setErr(err.error_code);
        } finally {
            setMess(true);
            setIsFetching(false);
        }
    };
    return (
        <div className="tab1">
            <Input
                name="Họ và tên"
                ref={inputRef}
                require
                defaultValue={user.name}
                onChange={(e) => (form.name = e.currentTarget.value)}
            />
            <Input
                name="Số điện thoại"
                require
                defaultValue={user.phone}
                onChange={(e) => (form.phone = e.currentTarget.value)}
            />
            <Input
                name="Email"
                require
                disabled
                defaultValue={user.username}
                onChange={(e) => (form.username = e.currentTarget.value)}
            />
            <Input name="password" require onChange={(e) => (form.password = e.currentTarget.value)} />
            <Input
                name="Avatar"
                require
                defaultValue={user.avatar}
                onChange={(e) => (form.avatar = e.currentTarget.value)}
            />

            {mess && <p>Cập nhật thành công!!</p>}
            <div className="btn main rect" onClick={onUpdateInfo}>
                LƯU LẠI
            </div>
        </div>
    );
}

export default Profile;
