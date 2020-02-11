import React from "react";
import RatingBar from "../RatingBar/RatingBar";
import "./FilteredRating.style.scss";

const FilteredRating = ({ filterByRating }) => {
    return (
        <div className="star-rating-container">
            <div className="star-rating">
                {" "}
                <p onClick={() => filterByRating(5)}>5 star</p>{" "}
                <RatingBar className="rating-bar" variant="determinate" value={50} />
            </div>
            <div className="star-rating">
                {" "}
                <p onClick={() => filterByRating(4)}>4 star</p>{" "}
                <RatingBar className="rating-bar" variant="determinate" value={50} />
            </div>
            <div className="star-rating">
                {" "}
                <p onClick={() => filterByRating(3)}>3 star</p>{" "}
                <RatingBar className="rating-bar" variant="determinate" value={50} />
            </div>
            <div className="star-rating">
                {" "}
                <p onClick={() => filterByRating(2)}>2 star</p>{" "}
                <RatingBar className="rating-bar" variant="determinate" value={50} />
            </div>
            <div className="star-rating">
                {" "}
                <p onClick={() => filterByRating(1)}>1 star</p>{" "}
                <RatingBar className="rating-bar" variant="determinate" value={50} />
            </div>
        </div>
    );
};

export default FilteredRating;
