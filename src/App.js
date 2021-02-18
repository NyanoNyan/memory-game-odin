/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Score from "./components/Score";
import Header from "./components/Header";
import imageData from "./components/imageData";

import "./style/App.css";

const App = () => {
    //// Set up States ////
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    
    const [selectedImg, setSelectedImg] = useState([]);
    const [randomImgList, setRandomImgList] = useState(imageData.map((obj) => obj.id));

    const [testState, setTestState] = useState(0);

    //// Set up Functions ////
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        // Shuffle Images
        const imgIds = imageData.map((obj) => obj.id);
        shuffle(imgIds);
        setRandomImgList(imgIds);

        // Set up high score
        function highScoreChecker() {
            if (currentScore > highScore) {
                setHighScore(currentScore);
            }
        }
        highScoreChecker();
    }, [currentScore, highScore]);
    
    const counterChecker = (id) => {
        const checkRepeat = selectedImg.includes(id);
        // If the selected the user selected the same image or not.
        // Also resets selected images and current score
        if (!checkRepeat) {
            setSelectedImg(selectedImg.concat([id]));
            setCurrentScore(currentScore + 1);
        } else {
            setCurrentScore(0);
            setSelectedImg([]);
        }
    };
    // Just for testing
    const testClick = () => {
        setTestState(testState + 1);
    };

    //// Set up output ////
    return (
        <div className="main-container">

            <div className="main-header">
                <Header />
            </div>

            <div className="score-container">
                <Score 
                    currentScore={currentScore}
                    highScore={highScore}
                />
            </div>

            <div className="btn-container">
                <Cards
                    counter={counterChecker}
                    currentScore={currentScore}
                    imgOrder={randomImgList}
                />
   
            </div>

            <div className="test-btn-holder">
                {/* eslint-disable-next-line react/button-has-type */}
                <button className="test-btn" onClick={testClick}>Test</button>
            </div>

        </div>
        
    );
};

export default App;
