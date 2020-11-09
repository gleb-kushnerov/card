import React from "react";
import './CardForm.scss';
import {useDispatch, useSelector} from "react-redux";
import {
    changeCardHolder,
    changeCardNumber,
    changeCardType,
    changeCvv, changeMonth, changeYear, clearFocusElementParameters,
    setFocusElementParameters,
    toggleFlippedCard
} from "../../store/actions/cardActions";

function getCardType(value) {
    let number = value;
    let re = new RegExp("^4");
    if (number.match(re) != null) return "visa";

    re = new RegExp("^(34|37)");
    if (number.match(re) != null) return "amex";

    re = new RegExp("^5[1-5]");
    if (number.match(re) != null) return "mastercard";

    re = new RegExp("^6011");
    if (number.match(re) != null) return "discover";

    re = new RegExp('^9792');
    if (number.match(re) != null) return 'troy';

    return "visa";
}

export function CardForm() {
    const dispatch = useDispatch();
    const {cardNumber, cardNumberLength} = useSelector(state => state.card);
    let cardNumberInputValue = cardNumber.slice(0, cardNumberLength);
    if (cardNumberInputValue.length) {
        cardNumberInputValue = cardNumberInputValue.reduce((acc, number, index) => {
            if ((index + 1) % 4 === 0 && index + 1 !== cardNumberLength) {
                acc = `${acc}${number.charAt(0)} `;
            } else {
                acc = `${acc}${number.charAt(0)}`;
            }
            return acc;
        }, ``);
    }
    function focusHandler(event) {
        const cvvInput = event.target.closest('[data-cvv-input]');
        const focusTarget = document.querySelector(`[data-focus-${event.target.id}]`);
        if (cvvInput) dispatch(toggleFlippedCard());
        if (focusTarget) {
            dispatch(setFocusElementParameters(
                focusTarget.offsetWidth,
                focusTarget.offsetHeight,
                focusTarget.offsetLeft,
                focusTarget.offsetTop));
        }
    }
    function blurHandler(event) {
        const cvvInput = event.target.closest('[data-cvv-input]');
        if (cvvInput) dispatch(toggleFlippedCard());
        dispatch(clearFocusElementParameters())
    }
    function changeHandler(event) {
        const cardNumberInput = event.target.closest('[data-card-number-input]');
        const cardHolderInput = event.target.closest('[data-card-holder-input]');
        const cvvInput = event.target.closest('[data-cvv-input]');
        const monthInput = event.target.closest('[data-month-input]');
        const yearInput = event.target.closest('[data-year-input]');
        if (cardNumberInput) {
            const value = cardNumberInput.value.split(' ').join('');
            const cardType = getCardType(value);
            dispatch(changeCardType(cardType));
            dispatch(changeCardNumber(value));
        } else if (cvvInput) {
            dispatch(changeCvv(cvvInput.value));
        } else if (cardHolderInput) {
            dispatch(changeCardHolder(cardHolderInput.value));
        } else if (monthInput) {
            dispatch(changeMonth(monthInput.value));
        } else if (yearInput) {
            dispatch(changeYear(yearInput.value));
        }
    }
    return (
        <section className="card-form">
            <form
                onFocus={focusHandler}
                onBlur={blurHandler}
                onChange={changeHandler}
            >
                <div className="form-group">
                    <label htmlFor="card-number-input">Card Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="card-number-input"
                        maxLength={19}
                        value={cardNumberInputValue}
                        data-card-number-input/>
                </div>
                <div className="form-group">
                    <label htmlFor="card-holder-input">Card Holders</label>
                    <input
                        type="text"
                        className="form-control"
                        id="card-holder-input"
                        data-card-holder-input/>
                </div>
                <div className="form-group">
                    <div className="form-row">
                        <div className="col-12">
                            <div className="form-row">
                                <div className="col">
                                    <label htmlFor="month-input">Expiration Date</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <select
                                        id="month-input"
                                        className="form-control"
                                        defaultValue={'Month'}
                                        data-month-input
                                    >
                                        <option disabled>Month</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                        <option>05</option>
                                        <option>06</option>
                                        <option>07</option>
                                        <option>08</option>
                                        <option>09</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select
                                        id="year-input"
                                        className="form-control"
                                        defaultValue={'Year'}
                                        data-year-input
                                    >
                                        <option disabled>Year</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                        <option>2024</option>
                                        <option>2025</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="input-cvv">CVV</label>
                    <input type="text" className="form-control" id="input-cvv" data-cvv-input maxLength={4}/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                    Submit
                </button>
            </form>
        </section>
    )
}
