/* eslint-disable react/jsx-one-expression-per-line */
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
import "../style/Header.css";

const Header = () => {
    return (
        <div className="header-comp">
            <h2>Memory Card Game</h2>
            <p> Select a different image when the picture reloads.</p>
            <p> This should be different compared to the last images you have selected.</p>
            {   /* Hold previous pictures that you have selected and
                select a new image that you have not selected. */}
        </div>
    );
};

export default Header;
