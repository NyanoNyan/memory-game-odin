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
import images from "./images";
import "../style/Cards.css";

const SetUpCards = (props) => {
    const { counter } = props;
    
    useEffect(() => {
        document.title += 1;
        console.log("Hello");
    });
    console.log("Out");

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const makeButtons = () => {
        // let imgLink = images[getRandomInt(0, 8)].src;
        const imgIds = images.map((obj) => obj.id);
        const shuffleImgs = shuffle(imgIds);
        const buttonsEle = shuffleImgs.map((eachIds) => {
            return (
                <button className="btns" key={`img${eachIds}`} onClick={() => counter(eachIds)}>
                    <img src={images[eachIds].src} />
                </button>
            );
        });
        return buttonsEle;
    };

    return (
        <div className="btn-container">
            {makeButtons()}
        </div>
    );
};

const Cards = (props) => {
    // console.log(props);
    const { counter } = props;
    return (
        <div >
            <SetUpCards counter={counter}/>
        </div>
    );
};

export default Cards;

// https://javascript.info/task/shuffle
// How does useEffect work, read the article.
