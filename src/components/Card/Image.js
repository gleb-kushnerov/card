import React from "react";

export default function Image({type, classes}) {
    return (
        <img src={require(`../../assets/${type}.png`)} className={classes}/>
    )
}
