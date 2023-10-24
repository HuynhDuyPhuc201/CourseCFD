import { useState } from 'react';
import Validate from '../ultil/validate';

export const useForm = (rules) => {
    const [form, setForm] = useState({});
    const [error, setError] = useState({});

    const _validate = () => {
        const errObject = Validate(form, rules);
        setError(errObject);
        return Object.keys(errObject).length === 0;
    };

    return {
        form,
        setForm,
        error,
        validate: _validate,
    };
};
