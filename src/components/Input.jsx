import { forwardRef } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    width: 100%;
`;

const Inputt = styled.input`
    width: 100%;
`;

// eslint-disable-next-line react-refresh/only-export-components
const Error = styled.p`
    color: red;
    position: absolute;
    width: 100% !important;
`;
// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function Input({ error, name, type = 'text', require, ...porps }, ref) {
    return (
        <>
            <label>
                <p>
                    {name} {require && <span>*</span>}
                </p>
                <Wrap className="wrap">
                    <Inputt ref={ref} type={type} placeholder="*****" {...porps} />
                    {error && <Error>{error}</Error>}
                </Wrap>
            </label>
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef(Input);
