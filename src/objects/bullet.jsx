import React from 'react';

const Bullet = ({
    alignment,
    children,
    iconName,
    reversed,
    scale,
    spacing,
}) => {
    // TODO: add option handling

    return (
        <div className="fd-o-bullet">
            <span
                className="fd-o-bullet__icon"
                data-test="fd-o-bullet__icon"
                aria-hidden
            >
                ICON
            </span>
            <div
                className="fd-o-bullet__content gb-u-grow"
                data-test="fd-o-bullet__content"
            >
                {children}
            </div>
        </div>
    );
};

Bullet.defaultProps = {
    reversed: false,
    scale: true,
    alignment: 'middle',
    iconClassName: '',
    spacingSize: '',
    className: '',
};

export default Bullet;
