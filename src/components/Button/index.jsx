
import classNames from 'classnames/bind';
import style from './style.module.scss'


const cx = classNames.bind(style)


// eslint-disable-next-line react/prop-types
function Button({children}) {
    return (
        <button className={cx('button')}>{ children }</button>
     );
}

export default Button;