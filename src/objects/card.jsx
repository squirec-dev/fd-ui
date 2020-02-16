import React from 'react';

const Card = ({
    as: As,
    children,
    childWidth,
}) => (
    <As className="fd-o-card" data-test="fd-o-card">
        {children} {/* TODO: map & wrap in childWidth class */}
    </As>
);

Card.defaultProps = {
    childWidth: '1/1',
    as: 'div',
};

export default Card;
