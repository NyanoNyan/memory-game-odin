/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/react-in-jsx-scope */

import React, { useEffect } from "react";
import imageData from "./imageData";

import "../style/Cards.css";

const SetUpCards = (props) => {
    const { counter, id } = props;

    const makeButtons = (
        <div>
            <button
                className="btns"
                onClick={() => {
                    counter(id);
                }}
            >
                <img src={process.env.PUBLIC_URL + imageData[id].src} />
            </button>
            <p className="info-text">{imageData[id].name}</p>
        </div>

    );

    return makeButtons;

};

const Cards = (props) => {
    // console.log("I'm in Cards");

    // useEffect(() => {
    //     console.log("test to set up random");
    // });
    const { counter, currentScore, imgOrder } = props;
    const newCards = imgOrder.map((id) => (
        <SetUpCards 
            key={`img${id}`}
            counter={counter} 
            currentScore={currentScore} 
            id={id}
        />
    ));
    return newCards;
};

export default Cards;

// https://javascript.info/task/shuffle
// How does useEffect work, read the article.

// Do I need to seperate shuffle functions and card making into two components,
// to make use of useEffect ?

// Someway to make one default view, then it should change due to shuffle of array using useEffect.
// Test button to test if it's working.

// Using useEffect in either cards or setUpCards, need to pass shuffle functions in there.
// Change setState of random id order in the useEffect.
