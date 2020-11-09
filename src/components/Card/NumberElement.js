import React from "react";
import {Separator} from "./Separator";
import {useDispatch} from "react-redux";
import {updateCardNumber} from "../../store/actions/cardActions";

export function NumberElement({currentNumber, previousNumber, index, isNumberWithSeparator}) {
    const numberClasses = `number-item${previousNumber  ? ' -append' : ''}`;
    const dispatch = useDispatch();
    function animationEndHandler(event) {
        if (event.target.classList.contains('-append')) {
            dispatch(updateCardNumber(index));
        }
    }
    return (
        <>
            {
                previousNumber
                    ?<span>
                        <div className='number-item -leave'>
                            {previousNumber}
                        </div>
                    </span>
                    : null
            }
            <span onAnimationEnd={animationEndHandler}>
                <div className={numberClasses}>
                    {currentNumber}
                </div>
                {isNumberWithSeparator ? <Separator/> : null}
            </span>
        </>
    )
}
