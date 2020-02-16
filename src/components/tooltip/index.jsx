import React from "react";
import Button from "../../objects/button";

const Tooltip = ({
    defaultState,
    id,
    children,
    icon,
    pointerPosition,
}) => {
    const [toggle, setToggle] = React.useState(defaultState);

    return (
        <React.Fragment>
            <Button
                className="notifications"
                aria-labelledby={`${id}__label`}
                icon={icon}
                onClick={() => setToggle(!toggle)}
            />
            <div
                aria-hidden={!toggle}
                className={`fd-c-tooltip__bubble fd-c-tooltip__bubble--${pointerPosition}`}
                hidden={!toggle}
                id={id}
                role="tooltip"
            >
                {children}
            </div>
        </React.Fragment>
    );
};

Tooltip.defaultProps = {
    defaultState: false,
    id: 'fd-c-tooltip__counter',
    pointerPosition: 'top',
};

export default Tooltip;
