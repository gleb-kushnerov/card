import React from "react";
import frontImage from "../../assets/5.jpeg";
import chipImage from "../../assets/chip.png";
import {CardNumber} from "./CardNumber";
import {CardTypeImage} from "./CardTypeImage";
import {FocusElement} from "./FocusElement";
import {CardHolder} from "./CardHolder";
import {MonthElement} from "./MonthElement";
import {useDispatch} from "react-redux";
import {updateMonth, updateYear} from "../../store/actions/cardActions";
import {YearElement} from "./YearElement";

export function CardFrontSide() {
    const dispatch = useDispatch();
    function animationEndHandler(event) {
        if (event.target.classList.contains('-month')) dispatch(updateMonth());
        if (event.target.classList.contains('-year')) dispatch(updateYear());
    }
    return (
        <div className="card-side -front">
            <FocusElement/>
            <div className="card-cover">
                <img src={frontImage} className={'background'} alt="background"/>
            </div>
            <div className="card-wrapper">
                <header className='card-top'>
                    <img src={chipImage} className='chip'/>
                    <CardTypeImage/>
                </header>
                <CardNumber/>
                <footer className='card-bottom'>
                    <label htmlFor="card-holder-input" className='card-name-info' data-focus-card-holder-input>
                        <div className="holder">
                            Card Holder
                        </div>
                        <CardHolder/>
                    </label>
                    <div className="card-date" data-focus-month-input data-focus-year-input
                         onAnimationEnd={animationEndHandler}>
                        <label htmlFor="month-input" className='date-label'>
                            Expires
                        </label>
                        <MonthElement/>
                        /
                        <YearElement/>
                    </div>
                </footer>
            </div>
        </div>
    )
}
