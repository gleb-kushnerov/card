import React from "react";
import frontImage from "../../assets/5.jpeg";
import {CardTypeImage} from "./CardTypeImage";
import {useSelector} from "react-redux";

export function CardBackSide() {
    const {cvv} = useSelector(state => state.card);
    return (
        <div className="card-side -back">
            <div className="card-cover">
                <img src={frontImage} className={'background'} alt="background"/>
            </div>
            <div className="card-band"/>
            <div className="card-cvv">
                <div className="cvv-title">CVV</div>
                <div className="cvv-band">
                    {
                        cvv.split('').map((_, index) => {
                            return (
                                <span key={index}>*</span>
                            );
                        })
                    }
                </div>
                <CardTypeImage/>
            </div>
        </div>
    )
}
