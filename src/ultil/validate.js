const REGEXP = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
    linkFB: /https?:\/\/(www\.)facebook.com\/[-a-zA-Z0-9]+/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/,
};

const ERROR_MESSAGE = {
    required: 'Trường này là bắt buộc',
    regexp: 'Định dạng sai',
};

// form = {
//     name: 'Huynh Duy Phuc',
//     email: '...',
//     phone: '...',
//     linkfb: '...',
//     username: '...',
//     password: '...'
// };

// rules = {
//     name: [
//         {
//             required: true,
//             message: '.....'
//         }
//     ],
//     email: [
//         { required: true},
//         {
//             regexp: 'email' | /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
//             message: '....'
//         }
//     ]
// }

function Validate(form, rules) {
    const errObject = {};

    for (let i in rules) {
        for (let j in rules[i]) {
            const rule = rules[i][j];
            console.log('form[i]', form[i]);

            if (rule.required) {
                if (!form[i]) {
                    errObject[i] = rule.message || ERROR_MESSAGE.required;
                    break;
                }
            }

            if (rule.regexp) {
                const regexp = REGEXP?.[rule.regexp] || rule.regexp;

                if (!regexp.test(form[i])) {
                    errObject[i] = rule.message || ERROR_MESSAGE.regexp;
                    break;
                }
            }

            // user truyền min or max or truyền cả 2
            if (rule.min || rule.max) {
                if (rule.min && rule.max) {
                    if (form[i].length < rule.min || form[i].length > rule.max) {
                        errObject[i] = rule.message || `Độ dài bắt buộc ${rule.min}-${rule.max} ký tự`;
                        break;
                    }
                } else if (rule.min) {
                    if (form[i].length < rule.min) {
                        errObject[i] = rule.message || `Độ dài bắt buộc lớn hơn ${rule.min} ký tự`;
                        break;
                    }
                } else if (rule.max) {
                    if (form[i].length > rule.max) {
                        errObject[i] = rule.message || `Độ dài bắt buộc nhỏ hơn ${rule.max} ký tự`;
                        break;
                    }
                }
            }
        }
    }

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

    // if (Object.keys(errObject).length === 0) {
    //     console.log('Thành Công');
    // }

    return errObject;
}

export default Validate;
