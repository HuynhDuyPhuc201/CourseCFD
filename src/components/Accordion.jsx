import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: block !important;
`;

// eslint-disable-next-line react/prop-types
function Accordion({ title, date, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('accordion', { active: isOpen })}>
            <div className="accordion__title" onClick={() => setIsOpen(!isOpen)}>
                <div className="date">Ngày {date}</div>
                <h3>{title}.</h3>
            </div>
            {isOpen && <Wrapper className="content">{children}</Wrapper>}
        </div>
    );
}

export default Accordion;
