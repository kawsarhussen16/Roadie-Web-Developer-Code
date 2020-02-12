import React from "react";
import Image from "../../assets/Software-Box-Mock-Up.jpg";
import "./Item.style.scss";
import CustomizedDialogs from "../Dialog/Dialog.js";

const Item = ({ addReview }) => {
    return (
        <div className="item-container">
            <img alt="soft-box" src={Image} />
            <span className="title-description">
                <h4>ROADIE COMMUNICATOR - INCLUDES INSTALLATION SOFTWARE</h4>
                <p>
                    by <strong>Roadie</strong>
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <p>
                    <li>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </li>
                </p>
                <div className="item-buttons">
                    <CustomizedDialogs addReview={addReview} />
                    <button className="button-primary">ADD TO CART</button>
                </div>
            </span>
        </div>
    );
};

export default Item;
