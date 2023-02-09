import React from 'react';
import './boardCSS/DropDown.css';

const DropDown = props => {
    const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);
    
    React.useEffect(() => {
        let repeat = null;
        if (props.visibility) {
            clearTimeout(repeat);
            repeat = null;
            setVisibilityAnimation(true);
        } else {
            repeat = setTimeout(() => {
                setVisibilityAnimation(false);
            }, 400);
        }

    }, [props.visibility]);

    return (
        <article className={`components-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
            { visibilityAnimation && props.children }
        </article>
    )
};

export default DropDown;
