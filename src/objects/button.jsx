import React from 'react';

const Button = ({
    as: As,
    attention,
    children,
    icon,
    vertical,
    ...rest
}) => {
    const classnames = `fd-o-btn fd-o-btn--${attention} gb-o-btn--${vertical ?
        'vertical' : 'horizontal'
    } ${icon &&
        'fd-o-btn--icon'
    }`;

    return (
        <As
            className={classnames}
            role="button"
            {...rest}
        >
            {icon && (
                <span
                    className="fd-o-icon"
                    data-test="fd-o-button__icon"
                >
                    ICON
                </span>
            )}
            <span className="fd-o-btn__content" data-test="fd-o-btn__content">
                {children}
            </span>
        </As>
    );
};

Button.defaultProps = {
    as: 'button',
    attention: 'primary',
};

export default Button;
