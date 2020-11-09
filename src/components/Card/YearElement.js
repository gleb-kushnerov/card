import React from "react";
import {useSelector} from "react-redux";

export function YearElement() {
    const {currentYear, previousYear} = useSelector(state => state.card.year);
    const classes = `${previousYear ? '-append -year' : ''}`;
    return (
        <label htmlFor="year-input" className='date-item'>
            {
                previousYear
                    ? <span className='-leave -year'>{previousYear}</span>
                    : null
            }
            <span className={classes}>{currentYear}</span>
        </label>
    );
}
