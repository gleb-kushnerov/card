import React from "react";
import {useSelector} from "react-redux";
import {NumberElement} from "./NumberElement";

export function CardNumber() {
    const {cardNumber} = useSelector(state => state.card);
    const cardNumberLength = cardNumber.length;
    return (
        <label htmlFor="card-number-input" className='card-number' data-focus-card-number-input>
            {
                cardNumber.map((number, index) => {
                    const isNumberWithSeparator = (index + 1) % 4 === 0 && index + 1 !== cardNumberLength;
                    const currentNumber = number.charAt(0);
                    const previousNumber = number.charAt(1);
                    return <NumberElement
                                currentNumber={currentNumber}
                                previousNumber={previousNumber}
                                index={index}
                                isNumberWithSeparator={isNumberWithSeparator}
                                key={index}
                            />
                })
            }
        </label>
    )
}
