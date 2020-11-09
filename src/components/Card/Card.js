import React from "react";
import './styles/Card.scss';
import {CardFrontSide} from "./CardFrontSide";
import {CardBackSide} from "./CardBackSide";
import {useSelector} from "react-redux";

export function Card() {
    const cardState = useSelector(state => state.card);
    const cardItemClasses = `card-item${cardState.isCardFlipped ? ' -flipped' : ''}`;
    return (
        <section className='card-container'>
            <div className={cardItemClasses}>
                <CardFrontSide/>
                <CardBackSide/>
            </div>
        </section>
    )
}
