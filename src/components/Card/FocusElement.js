import React from "react";
import {useSelector} from "react-redux";

export function FocusElement() {
    const {width, height, x, y} = useSelector(state => state.card.focusParameters);
    let styles;
    let classes = 'focus-element';
    if (width && height && x && y) {
        styles = {
            width,
            height,
            transform: `translate(${x}px, ${y}px)`
        };
        classes = 'focus-element -active';
    }
    return <div style={styles} className={classes}/>
}
