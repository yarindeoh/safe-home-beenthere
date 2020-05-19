import React from 'react';

export const Tag = ({ value, onClick, selected, customClass }) => {
    console.log(selected);
    const tagClass = selected ? 'tag selected ' : 'tag';
    return (
        <span className={`${tagClass}`} onClick={onClick}>
            {value}
        </span>
    );
};
