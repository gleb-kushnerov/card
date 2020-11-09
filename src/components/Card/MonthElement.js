import React from "react";
import {useSelector} from "react-redux";

export function MonthElement() {
    const {currentMonth, previousMonth} = useSelector(state => state.card.month);
    const classes = `${previousMonth ? '-append -month' : ''}`;
    return (
        <label htmlFor="month-input" className='date-item'>
            {
                previousMonth
                    ? <span className='-leave -month'>{previousMonth}</span>
                    : null
            }
            <span className={classes}>{currentMonth}</span>
        </label>
    );
}
