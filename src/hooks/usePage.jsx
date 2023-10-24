import { createContext, useContext } from 'react';

const Context = createContext();

// eslint-disable-next-line react/prop-types
export const PageProvider = ({ children }) => {
    // thường sử dụng useReducer để gom các state trong đây

    // sử dụng kiểu dữ liệu react nên phải .jsx
    return <Context.Provider>{children}</Context.Provider>;
};

export const usePage = () => useContext(Context);
